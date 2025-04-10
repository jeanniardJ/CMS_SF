<?php

/**
 * This file is part of the "jja-dev.fr" project.
 *
 * @category Twig_Extension
 *
 * @author   JJA-DEV <contact@jja-dev.fr>
 * @license  MIT <https://opensource.org/licenses/MIT>
 *
 * @see     https://jja-dev.fr
 */

namespace App\Twig;

use App\Service\ConfigService;
use Symfony\Component\HttpFoundation\RequestStack;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

/**
 * Class JsonLdService.
 *
 * @category Twig_Extension
 *
 * @author   JJA-DEV <contact@jja-dev.fr>
 * @license  MIT <https://opensource.org/licenses/MIT>
 *
 * @see     https://jja-dev.fr
 * This class is a Twig extension that generates JSON-LD data for the website.
 */
class JsonLdService extends AbstractExtension
{
    /**
     * @var array<mixed> The global configuration
     */
    private array $global;
    private ?string $baseUri;

    /**
     * JsonLdService constructor.
     *
     * @param ConfigService $configService // The ConfigService service
     * @param RequestStack  $request       // The RequestStack service
     */
    public function __construct(ConfigService $configService, RequestStack $request)
    {
        $this->global = $configService->getConfigSite();
        $this->baseUri = $request->getCurrentRequest() ? $request->getCurrentRequest()->getSchemeAndHttpHost() : null;
    }

    /**
     * Get the functions.
     *
     * @return array<TwigFunction>
     */
    public function getFunctions(): array
    {
        return [
            new TwigFunction('jsonLd', $this->generateJsonLd(...)),
        ];
    }

    /**
     * Generate the JSON-LD data.
     */
    public function generateJsonLd(): string
    {
        $data = [
            '@context' => 'https://schema.org',
            '@type' => 'WebSite',
            'name' => $this->global['site']['name'],
            'url' => $this->global['site']['url'],
            'logo' => $this->getAbsoluteUrl($this->global['site']['logo']),
            'description' => $this->global['site']['description'],
            'legalName' => $this->global['propriety']['name'],
            'keywords' => $this->global['site']['keywords'],
            'address' => [
                '@type' => 'PostalAddress',
                'addressLocality' => $this->global['propriety']['city'],
                // "addressRegion" => $this->global['propriety']['region'],
                'postalCode' => $this->global['propriety']['zipCode'],
                'streetAddress' => $this->global['propriety']['address'],
            ],
            'image' => $this->getAbsoluteUrl($this->global['site']['logo']),
            'telephone' => $this->global['propriety']['phone'],
            'email' => $this->global['propriety']['email'],
            'priceRange' => '$$',
            'openingHours' => 'Mo,Tu,We,Th,Fr 09:00-17:30',
            'inLanguage' => 'French',
            'brand' => [
                '@type' => 'Brand',
                'name' => $this->global['propriety']['name'],
                'description' => $this->global['site']['description'],
                'logo' => $this->global['site']['logo'],
            ],
            'contactPoint' => [
                [
                    '@type' => 'ContactPoint',
                    'telephone' => $this->global['propriety']['phone'],
                    'contactType' => 'customer service',
                ],
            ],
            'sameAs' => $this->sameAsData(),
            'foundingDate' => '2021',
            'addressCountry' => 'FR',
            'founder' => $this->global['propriety']['name'],
        ];

        $datas = "<script type='application/ld+json'>";
        $datas .= json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
        $datas .= '</script>';

        return $datas;
    }

    /**
     * Get the sameAs data.
     *
     * @return array<mixed>
     */
    private function sameAsData(): array
    {
        $sameAs = [];

        foreach ($this->global['social'] as $key => $value) {
            if (null !== $value) {
                $sameAs[] = $value;
            }
        }

        return $sameAs;
    }

    /**
     * Get the absolute URL.
     *
     * @param string $url // The URL
     */
    private function getAbsoluteUrl($url): string
    {
        return $this->baseUri . '/' . $url;
    }
}
