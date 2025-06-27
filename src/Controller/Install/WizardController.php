<?php

namespace App\Controller\Install;

use App\Service\Install\CompatibilityChecker;
use App\Service\Install\DatabaseManager;
use App\Service\Install\EnvironmentManager;
use App\Service\Install\UserManager;
use App\Service\Install\ConfigurationManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

#[Route('/install', name: 'install_')]
class WizardController extends AbstractController
{
    private CompatibilityChecker $compatibilityChecker;
    private DatabaseManager $databaseManager;
    private EnvironmentManager $environmentManager;
    private UserManager $userManager;
    private ConfigurationManager $configurationManager;

    public function __construct(
        CompatibilityChecker $compatibilityChecker,
        DatabaseManager $databaseManager,
        EnvironmentManager $environmentManager,
        UserManager $userManager,
        ConfigurationManager $configurationManager
    ) {
        $this->compatibilityChecker = $compatibilityChecker;
        $this->databaseManager = $databaseManager;
        $this->environmentManager = $environmentManager;
        $this->userManager = $userManager;
        $this->configurationManager = $configurationManager;
    }

    #[Route('/', name: 'welcome')]
    public function welcome(): Response
    {
        // Check if already installed
        if ($this->configurationManager->isInstalled()) {
            return $this->render('install/already_installed.html.twig', [
                'installation_info' => $this->configurationManager->getInstallationInfo()
            ]);
        }

        return $this->render('install/welcome.html.twig', [
            'current_step' => 'welcome',
            'step_number' => 1,
            'total_steps' => 6
        ]);
    }

    #[Route('/compatibility', name: 'compatibility')]
    public function compatibility(): Response
    {
        if ($this->configurationManager->isInstalled()) {
            return $this->redirectToRoute('install_welcome');
        }

        $checks = $this->compatibilityChecker->checkAll();

        return $this->render('install/compatibility.html.twig', [
            'current_step' => 'compatibility',
            'step_number' => 2,
            'total_steps' => 6,
            'checks' => $checks
        ]);
    }

    #[Route('/compatibility/check', name: 'compatibility_check', methods: ['POST'])]
    public function compatibilityCheck(): JsonResponse
    {
        if ($this->configurationManager->isInstalled()) {
            return new JsonResponse(['error' => 'Installation already completed'], 403);
        }

        $checks = $this->compatibilityChecker->checkAll();
        
        return new JsonResponse([
            'success' => true,
            'checks' => $checks,
            'can_proceed' => $checks['overall']['status'] !== 'error'
        ]);
    }

    #[Route('/database', name: 'database')]
    public function database(Request $request, SessionInterface $session): Response
    {
        if ($this->configurationManager->isInstalled()) {
            return $this->redirectToRoute('install_welcome');
        }

        $dbConfig = $session->get('install_db_config', [
            'type' => 'mysql',
            'host' => 'localhost',
            'port' => '',
            'name' => '',
            'user' => '',
            'password' => ''
        ]);

        if ($request->isMethod('POST')) {
            $dbConfig = $request->request->all();
            $session->set('install_db_config', $dbConfig);

            $validation = $this->databaseManager->validateConfig($dbConfig);
            if (!$validation['valid']) {
                return $this->render('install/database.html.twig', [
                    'current_step' => 'database',
                    'step_number' => 3,
                    'total_steps' => 6,
                    'config' => $dbConfig,
                    'errors' => $validation['errors']
                ]);
            }

            // Test connection
            $connectionTest = $this->databaseManager->testConnection($dbConfig);
            if (!$connectionTest['success']) {
                return $this->render('install/database.html.twig', [
                    'current_step' => 'database',
                    'step_number' => 3,
                    'total_steps' => 6,
                    'config' => $dbConfig,
                    'connection_error' => $connectionTest['message']
                ]);
            }

            // Create database if needed
            $createResult = $this->databaseManager->createDatabase($dbConfig);
            if (!$createResult['success']) {
                return $this->render('install/database.html.twig', [
                    'current_step' => 'database',
                    'step_number' => 3,
                    'total_steps' => 6,
                    'config' => $dbConfig,
                    'database_error' => $createResult['message']
                ]);
            }

            // Update environment with database configuration
            $envConfig = $this->environmentManager->getEnvironmentTemplate();
            $envConfig['database_url'] = $this->databaseManager->getDsn($dbConfig);
            $envResult = $this->environmentManager->generateEnvironmentFile($envConfig);

            if (!$envResult['success']) {
                return $this->render('install/database.html.twig', [
                    'current_step' => 'database',
                    'step_number' => 3,
                    'total_steps' => 6,
                    'config' => $dbConfig,
                    'env_error' => $envResult['message']
                ]);
            }

            $session->getFlashBag()->add('success', 'Database configuration saved successfully');
            return $this->redirectToRoute('install_admin_user');
        }

        return $this->render('install/database.html.twig', [
            'current_step' => 'database',
            'step_number' => 3,
            'total_steps' => 6,
            'config' => $dbConfig
        ]);
    }

    #[Route('/database/test', name: 'database_test', methods: ['POST'])]
    public function databaseTest(Request $request): JsonResponse
    {
        if ($this->configurationManager->isInstalled()) {
            return new JsonResponse(['error' => 'Installation already completed'], 403);
        }

        $config = $request->request->all();
        $validation = $this->databaseManager->validateConfig($config);
        
        if (!$validation['valid']) {
            return new JsonResponse([
                'success' => false,
                'errors' => $validation['errors']
            ]);
        }

        $result = $this->databaseManager->testConnection($config);
        
        return new JsonResponse([
            'success' => $result['success'],
            'message' => $result['message'],
            'version' => $result['version'] ?? null
        ]);
    }

    #[Route('/admin-user', name: 'admin_user')]
    public function adminUser(Request $request, SessionInterface $session): Response
    {
        if ($this->configurationManager->isInstalled()) {
            return $this->redirectToRoute('install_welcome');
        }

        $userData = $session->get('install_user_data', $this->userManager->getUserTemplate());

        if ($request->isMethod('POST')) {
            $userData = $request->request->all();
            $session->set('install_user_data', $userData);

            $validation = $this->userManager->validateUserData($userData);
            if (!$validation['valid']) {
                return $this->render('install/admin_user.html.twig', [
                    'current_step' => 'admin_user',
                    'step_number' => 4,
                    'total_steps' => 6,
                    'user_data' => $userData,
                    'errors' => $validation['errors']
                ]);
            }

            $session->getFlashBag()->add('success', 'Admin user configuration saved');
            return $this->redirectToRoute('install_site_config');
        }

        return $this->render('install/admin_user.html.twig', [
            'current_step' => 'admin_user',
            'step_number' => 4,
            'total_steps' => 6,
            'user_data' => $userData
        ]);
    }

    #[Route('/site-config', name: 'site_config')]
    public function siteConfig(Request $request, SessionInterface $session): Response
    {
        if ($this->configurationManager->isInstalled()) {
            return $this->redirectToRoute('install_welcome');
        }

        $configData = $session->get('install_config_data', $this->configurationManager->getConfigurationTemplate());

        if ($request->isMethod('POST')) {
            $configData = $request->request->all();
            $session->set('install_config_data', $configData);

            $validation = $this->configurationManager->validateConfiguration($configData);
            if (!$validation['valid']) {
                return $this->render('install/site_config.html.twig', [
                    'current_step' => 'site_config',
                    'step_number' => 5,
                    'total_steps' => 6,
                    'config_data' => $configData,
                    'errors' => $validation['errors']
                ]);
            }

            $session->getFlashBag()->add('success', 'Site configuration saved');
            return $this->redirectToRoute('install_finalize');
        }

        return $this->render('install/site_config.html.twig', [
            'current_step' => 'site_config',
            'step_number' => 5,
            'total_steps' => 6,
            'config_data' => $configData
        ]);
    }

    #[Route('/finalize', name: 'finalize')]
    public function finalize(Request $request, SessionInterface $session): Response
    {
        if ($this->configurationManager->isInstalled()) {
            return $this->redirectToRoute('install_welcome');
        }

        if ($request->isMethod('POST')) {
            // Run migrations
            $migrationResult = $this->databaseManager->runMigrations();
            if (!$migrationResult['success']) {
                return $this->render('install/finalize.html.twig', [
                    'current_step' => 'finalize',
                    'step_number' => 6,
                    'total_steps' => 6,
                    'migration_error' => $migrationResult['message']
                ]);
            }

            // Create admin user
            $userData = $session->get('install_user_data', []);
            if (!empty($userData)) {
                $userResult = $this->userManager->createAdminUser($userData);
                if (!$userResult['success']) {
                    return $this->render('install/finalize.html.twig', [
                        'current_step' => 'finalize',
                        'step_number' => 6,
                        'total_steps' => 6,
                        'user_error' => $userResult['message']
                    ]);
                }
            }

            // Save site configuration
            $configData = $session->get('install_config_data', []);
            if (!empty($configData)) {
                $configResult = $this->configurationManager->saveConfiguration($configData);
                if (!$configResult['success']) {
                    return $this->render('install/finalize.html.twig', [
                        'current_step' => 'finalize',
                        'step_number' => 6,
                        'total_steps' => 6,
                        'config_error' => $configResult['message']
                    ]);
                }
            }

            // Create installation lock
            $lockResult = $this->configurationManager->createInstallationLock();
            if (!$lockResult['success']) {
                return $this->render('install/finalize.html.twig', [
                    'current_step' => 'finalize',
                    'step_number' => 6,
                    'total_steps' => 6,
                    'lock_error' => $lockResult['message']
                ]);
            }

            // Clear installation session data
            $session->remove('install_db_config');
            $session->remove('install_user_data');
            $session->remove('install_config_data');

            return $this->redirectToRoute('install_complete');
        }

        // Show summary
        $summary = [
            'database' => $session->get('install_db_config', []),
            'user' => $session->get('install_user_data', []),
            'config' => $session->get('install_config_data', [])
        ];

        return $this->render('install/finalize.html.twig', [
            'current_step' => 'finalize',
            'step_number' => 6,
            'total_steps' => 6,
            'summary' => $summary
        ]);
    }

    #[Route('/complete', name: 'complete')]
    public function complete(): Response
    {
        if (!$this->configurationManager->isInstalled()) {
            return $this->redirectToRoute('install_welcome');
        }

        return $this->render('install/complete.html.twig', [
            'installation_info' => $this->configurationManager->getInstallationInfo()
        ]);
    }
}