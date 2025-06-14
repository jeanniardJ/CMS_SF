<?php

/**
 * @category Controller
 *
 * @author   JJA-DEV
 * @license  JJA DEV © 2021 by Jeanniard Jonathan is licensed under MIT.
 * To view a copy of this license, visit https://opensource.org/licenses/MIT
 *
 * @see     https://jja-dev.fr
 */

namespace App\Controller;

use App\Entity\Module;
use App\Repository\ModuleRepository;
use App\Service\GithubService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Process\Process;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

/**
 * Class ModuleAdminController.
 *
 * @category Controller
 *
 * @author   JJA-DEV
 * @license  JJA DEV © 2021 by Jeanniard Jonathan is licensed under MIT.
 * To view a copy of this license, visit https://opensource.org/licenses/MIT
 *
 * @see     https://jja-dev.fr
 */
#[IsGranted('ROLE_DEV')]
#[Route('/admin/module')]
class ModuleAdminController extends AbstractController
{
    private const _PREFIXPACKAGE = 'jjadev/';

    #[Route('/', name: 'app_module_admin')]
    public function index(): Response
    {
        return $this->render('admin/module/index.html.twig');
    }

    #[Route('/json/{offset?}{limit?}', name: 'app_admin_module_index_json', methods: ['GET'])]
    public function dataJson(
        GithubService $githubService,
        Request $request,
        ModuleRepository $moduleRepository
    ): JsonResponse {
        $modules = [];
        $offset = max(0, $request->query->getInt('offset', 0)); // $offset = numero de la page
        $limit = $request->query->getInt('limit', 10);

        // recuperation des repositories de type modules de l'organisation JJA-DEV-FR
        $repositories = $githubService->getRepositoriesOrg($offset);

        foreach ($repositories as $repository) {
            $module = $moduleRepository->findOneBy(['idGithub' => $repository['id']]);

            $urlShow = $this->generateUrl('app_module_admin_show', ['id' => $repository['id']]);

            if (empty($module)) {
                $createdAt = new \DateTimeImmutable($repository['created_at']);
                $updatedAt = new \DateTimeImmutable($repository['updated_at']);

                $modules[] = [
                    'idGithub' => $repository['id'],
                    'name' => $repository['name'],
                    'isInstall' => "<span class='badge text-bg-danger'>Non installé</span>",
                    'createdAtMdl' => $createdAt->format('Y-m-d H:i:s'),
                    'updatedAt' => $updatedAt->format('Y-m-d H:i:s'),
                    'actions' => '<a href="' . $urlShow . '" class="btn btn-primary btn-sm">Voir</a>',
                ];
            } else {
                $modules[] = [
                    'id' => $module->getId(),
                    'idGithub' => $module->getIdGithub(),
                    'name' => $module->getName(),
                    'isInstall' => $module->IsInstall() ?
                        "<span class='badge text-bg-success'>Installé</span>" :
                        "<span class='badge text-bg-danger'>Non installé</span>",
                    'createdAtMdl' => $module->getCreatedAt()->format('Y-m-d H:i:s'),
                    'updatedAt' => $module->getUpdateAt()->format('Y-m-d H:i:s'),
                    'actions' => '<a href="' . $urlShow . '" class="btn btn-primary btn-sm">Voir</a>',
                ];
            }
        }

        $modules = array_slice($modules, $offset, $limit);

        return $this->json($modules);
    }

    #[Route('/{id}', name: 'app_module_admin_show', methods: ['GET'])]
    public function show(GithubService $githubService, Request $request, ModuleRepository $repositories): Response
    {
        return $this->render('admin/module/show.html.twig', [
            'module' => $repositories->findOneBy(
                ['idGithub' => $request->get('id')]
            ) ?
                $repositories->findOneBy(['idGithub' => $request->get('id')]) :
                $githubService->getRepositoryById($request->get('id'), ''),
        ]);
    }

    #[Route('/{idGithub}/install', name: 'app_module_admin_install', methods: ['get'])]
    public function install(
        GithubService $githubService,
        Request $request,
        ModuleRepository $moduleRepository,
        EntityManagerInterface $entityManagerInterface
    ): Response {
        $module = $githubService->getRepositoryById($request->get('idGithub'), '');
        $moduleExist = $moduleRepository->findOneBy(['idGithub' => $module['id']]);

        if (null === $moduleExist) {
            $moduleObj = new Module();
            $moduleObj->setIdGithub($module['id']);
            $moduleObj->setName($module['name']);
            $moduleObj->setDescription($module['description']);
            $moduleObj->setUrl($module['html_url']);
            $moduleObj->setCreatedAt(new \DateTimeImmutable($module['created_at']));
            $moduleObj->setUpdateAt(new \DateTimeImmutable($module['updated_at']));
            $moduleObj->setInstall(true);

            chdir($this->getParameter('kernel.project_dir'));

            exec('composer require ' . strtolower(escapeshellarg(self::_PREFIXPACKAGE . $module['name'])) . ':dev-main 2>&1', $output, $return_var);

            $process = Process::fromShellCommandline('composer require ' . strtolower(escapeshellarg(self::_PREFIXPACKAGE . $module['name'])) . ':dev-main');
            $process->run();

            if (!$process->isSuccessful()) {
                $this->addFlash('danger', ['toast', 'admin.module.install_error']);

                return $this->redirectToRoute('app_module_admin_show', ['id' => $module['id']]);
            }

            $entityManagerInterface->persist($moduleObj);
            $entityManagerInterface->flush();
        } else {
            $this->addFlash('warning', ['toast', 'admin.module.install_exist']);

            return $this->redirectToRoute('app_module_admin');
        }

        $this->addFlash('success', ['toast', 'admin.module.install_success']);

        return $this->redirectToRoute('app_module_admin_show', ['id' => $module['id']]);
    }

    #[Route('/{idGithub}/uninstall', name: 'app_module_admin_uninstall', methods: ['GET'])]
    public function uninstall(
        GithubService $githubService,
        Request $request,
        ModuleRepository $moduleRepository,
        EntityManagerInterface $entityManagerInterface
    ): Response {
        $module = $githubService->getRepositoryById($request->get('idGithub'), '');
        $moduleExist = $moduleRepository->findOneBy(['idGithub' => $module['id']]);

        if (!$moduleExist) {
            $this->addFlash('warning', ['toast', 'admin.module.uninstall_not_exist']);

            return $this->redirectToRoute('app_module_admin');
        }

        $command = 'composer remove --no-ansi --no-interaction --no-progress ' . strtolower(escapeshellarg(self::_PREFIXPACKAGE . $module['name']));
        chdir($this->getParameter('kernel.project_dir'));

        $process = Process::fromShellCommandline($command);
        $process->run();

        if (!$process->isSuccessful()) {
            $this->addFlash('danger', ['toast', 'admin.module.uninstall_error']);

            return $this->redirectToRoute('app_module_admin_show', ['id' => $module['id']]);
        }

        if (0 !== $process->getExitCode()) {
            $this->addFlash('danger', ['toast', 'admin.module.uninstall_error']);

            return $this->redirectToRoute('app_module_admin_show', ['id' => $module['id']]);
        }

        $moduleExist->setInstall(false);
        $entityManagerInterface->persist($moduleExist);
        $entityManagerInterface->flush();

        $this->addFlash('success', ['toast', 'admin.module.uninstall_success']);

        return $this->redirectToRoute('app_module_admin');
    }

    #[Route('/{idGithub}/update', name: 'app_module_admin_update', methods: ['GET'])]
    public function update(GithubService $githubService, Request $request): Response
    {
        $module = $githubService->getRepositoryById($request->get('id'), '');

        return $this->redirectToRoute('app_module_admin');
    }
}
