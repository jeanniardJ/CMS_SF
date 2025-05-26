<?php

/**
 * @category Service
 *
 * @author   JJA-DEV
 * @license  JJA DEV © 2021 par Jeanniard Jonathan sous licence MIT.
 * Pour voir une copie de cette licence, visitez https://opensource.org/licenses/MIT
 *
 * @see     https://jja-dev.fr
 */

namespace App\Service;

use Symfony\Contracts\HttpClient\HttpClientInterface;

/**
 * Class LinkedInContactImporter.
 */
class LinkedInContactImporter
{
    private HttpClientInterface $client;
    private string $apiEndpoint = 'https://api.linkedin.com/v2/';
    private string $accessToken = '78drnq4bzl4mf3';  // Assurez-vous d'obtenir un jeton d'accès valide

    public function __construct(HttpClientInterface $client, string $accessToken)
    {
        $this->client = $client;
        $this->accessToken = $accessToken;
    }

    public function importContacts(): array
    {
        $response = $this->client
            ->request('GET', $this->apiEndpoint . 'connections?q=myConnections', [
                'headers' => [
                    'Authorization' => 'Bearer ' . $this->accessToken,
                ],
            ]);

        $data = $response->toArray();
        $contacts = [];

        foreach ($data['elements'] as $contactData) {
            // Transformez les données de contact de LinkedIn en votre format de contact local
            $contacts[] = $this->transformContactData($contactData);
        }

        return $contacts;
    }

    private function transformContactData(array $contactData): array
    {
        // Transformez les données de contact de LinkedIn en votre format de contact local
        return [
            'firstName' => $contactData['localizedFirstName'] ?? '',
            'lastName' => $contactData['localizedLastName'] ?? '',
            'email' => $contactData['emailAddress'] ?? '',
            // ... autres transformations de données
        ];
    }
}
