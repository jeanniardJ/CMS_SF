<?php

namespace App\EventSubscriber;

use App\Kernel;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class InstallSubscriber implements EventSubscriberInterface
{
    private Kernel $kernel;

    public function __construct(Kernel $kernel)
    {
        $this->kernel = $kernel;
    }

    public static function getSubscribedEvents(): array
    {
        return [
            'kernel.request' => 'onKernelRequest',
        ];
    }

    public function onKernelRequest(RequestEvent $event): void
    {
        if ($this->kernel->getEnvironment() !== 'dev' && (!file_exists($this->kernel->getProjectDir() . '/.env') || is_dir($this->kernel->getProjectDir() . '/public/install'))) {
            // Logique d'installation
            // Par exemple, rediriger vers une page d'installation
            $event->setResponse(new RedirectResponse('/install/index.php'));

            $event->stopPropagation();
        }
    }
}
