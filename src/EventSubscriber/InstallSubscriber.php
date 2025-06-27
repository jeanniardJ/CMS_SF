<?php

namespace App\EventSubscriber;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class InstallSubscriber implements EventSubscriberInterface
{
    private string $projectDir;
    private UrlGeneratorInterface $urlGenerator;
    private Filesystem $filesystem;

    public function __construct(string $projectDir, UrlGeneratorInterface $urlGenerator)
    {
        $this->projectDir = $projectDir;
        $this->urlGenerator = $urlGenerator;
        $this->filesystem = new Filesystem();
    }

    public static function getSubscribedEvents(): array
    {
        return [
            'kernel.request' => 'onKernelRequest',
        ];
    }

    public function onKernelRequest(RequestEvent $event): void
    {
        $request = $event->getRequest();
        
        // Don't interfere with install routes or static assets
        if (str_starts_with($request->getPathInfo(), '/install') || 
            str_starts_with($request->getPathInfo(), '/build') ||
            str_starts_with($request->getPathInfo(), '/_') ||
            $request->getPathInfo() === '/favicon.ico') {
            return;
        }

        // Check if installation is completed
        $installLockFile = $this->projectDir . '/.installed';
        $envFile = $this->projectDir . '/.env';
        
        // If not installed, redirect to installation wizard
        if (!$this->filesystem->exists($installLockFile) || !$this->filesystem->exists($envFile)) {
            $installUrl = $this->urlGenerator->generate('install_welcome');
            $response = new RedirectResponse($installUrl);
            $event->setResponse($response);
            return;
        }
        
        // If accessing install routes when already installed, redirect to main site
        if (str_starts_with($request->getPathInfo(), '/install')) {
            $homeUrl = $this->urlGenerator->generate('install_welcome'); // This will show "already installed" page
            $response = new RedirectResponse($homeUrl);
            $event->setResponse($response);
            return;
        }
    }
}
