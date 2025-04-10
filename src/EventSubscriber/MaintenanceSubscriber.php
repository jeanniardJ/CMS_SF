<?php

namespace App\EventSubscriber;

use App\Kernel;
use IPLib\Factory;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\HttpKernel\KernelEvents;
use Twig\Environment;

class MaintenanceSubscriber implements EventSubscriberInterface
{
    private bool $isMaintenance;

    private array $ips;
    private Kernel $kernel;
    private Environment $twig;

    public function __construct(array $maintenances, Kernel $kernel, Environment $twig)
    {
        $this->isMaintenance = $maintenances['isMaintenance'];
        $this->ips = $maintenances['ips'];
        $this->kernel = $kernel;
        $this->twig = $twig;
    }

    public static function getSubscribedEvents(): array
    {
        return [
            KernelEvents::REQUEST => 'onKernelRequest',
        ];
    }

    public function onKernelRequest(RequestEvent $event): void
    {
        $currentIP = empty($_SERVER['REMOTE_ADDR']) ? '127.0.0.1' : $_SERVER['REMOTE_ADDR'];
        $address = Factory::parseAddressString($currentIP);
        $range = Factory::parseRangeString('2a01:cb10:878e:3e00::/56');

        $debug = 'dev' === $this->kernel->getEnvironment();

        if (
            $this->isMaintenance && !$debug
            && !(in_array($currentIP, $this->ips)
                && '127.0.0.1' === $address->toString() || $address->matches($range))
        ) {
            $template = $this->twig->render('maintenance/maintenance.html.twig');
            // We send our response with a 503 response code (service unavailable)
            $event->setResponse(new Response($template, Response::HTTP_SERVICE_UNAVAILABLE));
            $event->stopPropagation();
        } elseif (
            $debug
            && !(in_array($currentIP, $this->ips)
                && '127.0.0.1' === $address->toString() || $address->matches($range))
        ) {
            $template = $this->twig->render('maintenance/construction.html.twig');
            // We send our response with a 503 response code (service unavailable)
            $event->setResponse(new Response($template, Response::HTTP_SERVICE_UNAVAILABLE));
            $event->stopPropagation();
        }
    }
}
