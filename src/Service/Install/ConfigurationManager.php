<?php

namespace App\Service\Install;

use App\Entity\Config;
use App\Entity\ConfigTemplate;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Filesystem\Filesystem;

/**
 * Service to manage site configuration during installation
 */
class ConfigurationManager
{
    private EntityManagerInterface $entityManager;
    private Filesystem $filesystem;
    private string $projectDir;

    public function __construct(EntityManagerInterface $entityManager, string $projectDir)
    {
        $this->entityManager = $entityManager;
        $this->filesystem = new Filesystem();
        $this->projectDir = $projectDir;
    }

    public function saveConfiguration(array $config): array
    {
        try {
            // Save site configuration
            if (!empty($config['site'])) {
                $this->saveSiteConfig($config['site']);
            }

            // Save email configuration
            if (!empty($config['email'])) {
                $this->saveEmailConfig($config['email']);
            }

            // Save security configuration
            if (!empty($config['security'])) {
                $this->saveSecurityConfig($config['security']);
            }

            // Save template configuration
            if (!empty($config['template'])) {
                $this->saveTemplateConfig($config['template']);
            }

            // Save analytics configuration
            if (!empty($config['analytics'])) {
                $this->saveAnalyticsConfig($config['analytics']);
            }

            $this->entityManager->flush();

            return [
                'success' => true,
                'message' => 'Configuration saved successfully'
            ];

        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => 'Configuration save failed: ' . $e->getMessage()
            ];
        }
    }

    public function validateConfiguration(array $config): array
    {
        $errors = [];

        // Validate site configuration
        if (!empty($config['site'])) {
            $siteErrors = $this->validateSiteConfig($config['site']);
            $errors = array_merge($errors, $siteErrors);
        }

        // Validate email configuration
        if (!empty($config['email'])) {
            $emailErrors = $this->validateEmailConfig($config['email']);
            $errors = array_merge($errors, $emailErrors);
        }

        return [
            'valid' => empty($errors),
            'errors' => $errors
        ];
    }

    public function createInstallationLock(): array
    {
        try {
            $lockFile = $this->projectDir . '/.installed';
            $lockData = [
                'installed_at' => date('Y-m-d H:i:s'),
                'version' => '1.0.0',
                'installer_version' => '1.0.0'
            ];

            $this->filesystem->dumpFile($lockFile, json_encode($lockData, JSON_PRETTY_PRINT));
            $this->filesystem->chmod($lockFile, 0644);

            return [
                'success' => true,
                'message' => 'Installation lock created successfully'
            ];

        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => 'Failed to create installation lock: ' . $e->getMessage()
            ];
        }
    }

    public function isInstalled(): bool
    {
        return $this->filesystem->exists($this->projectDir . '/.installed');
    }

    public function getInstallationInfo(): ?array
    {
        $lockFile = $this->projectDir . '/.installed';
        
        if (!$this->filesystem->exists($lockFile)) {
            return null;
        }

        try {
            $content = file_get_contents($lockFile);
            return json_decode($content, true);
        } catch (\Exception $e) {
            return null;
        }
    }

    private function saveSiteConfig(array $siteConfig): void
    {
        $config = $this->getOrCreateConfig('site');
        $config->setValue($siteConfig);
        $this->entityManager->persist($config);
    }

    private function saveEmailConfig(array $emailConfig): void
    {
        $config = $this->getOrCreateConfig('email');
        $config->setValue($emailConfig);
        $this->entityManager->persist($config);
    }

    private function saveSecurityConfig(array $securityConfig): void
    {
        $config = $this->getOrCreateConfig('security');
        $config->setValue($securityConfig);
        $this->entityManager->persist($config);
    }

    private function saveTemplateConfig(array $templateConfig): void
    {
        // Save to ConfigTemplate entity if it exists
        $configTemplate = $this->entityManager
            ->getRepository(ConfigTemplate::class)
            ->findOneBy(['name' => 'presentation']);

        if (!$configTemplate) {
            $configTemplate = new ConfigTemplate();
            $configTemplate->setName('presentation');
        }

        $configTemplate->setValue($templateConfig);
        $this->entityManager->persist($configTemplate);
    }

    private function saveAnalyticsConfig(array $analyticsConfig): void
    {
        $config = $this->getOrCreateConfig('analytics');
        $config->setValue($analyticsConfig);
        $this->entityManager->persist($config);
    }

    private function getOrCreateConfig(string $name): Config
    {
        $config = $this->entityManager
            ->getRepository(Config::class)
            ->findOneBy(['name' => $name]);

        if (!$config) {
            $config = new Config();
            $config->setName($name);
        }

        return $config;
    }

    private function validateSiteConfig(array $siteConfig): array
    {
        $errors = [];

        if (empty($siteConfig['name'])) {
            $errors[] = 'Site name is required';
        } elseif (strlen($siteConfig['name']) > 255) {
            $errors[] = 'Site name must not exceed 255 characters';
        }

        if (!empty($siteConfig['url']) && !filter_var($siteConfig['url'], FILTER_VALIDATE_URL)) {
            $errors[] = 'Site URL must be a valid URL';
        }

        if (!empty($siteConfig['description']) && strlen($siteConfig['description']) > 1000) {
            $errors[] = 'Site description must not exceed 1000 characters';
        }

        return $errors;
    }

    private function validateEmailConfig(array $emailConfig): array
    {
        $errors = [];

        if (!empty($emailConfig['from_email']) && !filter_var($emailConfig['from_email'], FILTER_VALIDATE_EMAIL)) {
            $errors[] = 'From email must be a valid email address';
        }

        if (!empty($emailConfig['from_name']) && strlen($emailConfig['from_name']) > 255) {
            $errors[] = 'From name must not exceed 255 characters';
        }

        return $errors;
    }

    public function getConfigurationTemplate(): array
    {
        return [
            'site' => [
                'name' => '',
                'description' => '',
                'url' => '',
                'logo' => '',
                'favicon' => ''
            ],
            'email' => [
                'from_email' => '',
                'from_name' => '',
                'smtp_host' => '',
                'smtp_port' => '',
                'smtp_username' => '',
                'smtp_password' => '',
                'smtp_security' => 'tls'
            ],
            'security' => [
                'session_timeout' => 3600,
                'password_policy' => 'strict',
                'enable_2fa' => false
            ],
            'template' => [
                'title' => '',
                'description' => '',
                'theme' => 'default'
            ],
            'analytics' => [
                'google_analytics' => '',
                'facebook_pixel' => '',
                'matomo_site_id' => '',
                'matomo_url' => ''
            ]
        ];
    }
}