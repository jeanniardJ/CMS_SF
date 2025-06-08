<?php

/**
 * @category Service
 *
 * @author   JJA-DEV
 * @license  MIT
 * @see     https://jja-dev.fr
 */

namespace App\Service;

use Symfony\Contracts\HttpClient\HttpClientInterface;
//TODO: Doit etre un bundle pour pouvoir l'utiliser dans d'autres projets
//TODO: Les cles doit etre dans un fichier de configuration .env
/**
 * Class LinkedInContactImporter.
 */
class LinkedInContactImporter
{
    private HttpClientInterface $client;
    private string $apiEndpoint = 'https://api.linkedin.com/v2/';
    private string $accessToken = '';  // Assurez-vous d'obtenir un jeton d'accès valide

    public function __construct(HttpClientInterface $client, string $accessToken)
    {
        $this->client = $client;
        $this->accessToken = $accessToken;
    }

    /**
     * Importe les contacts de LinkedIn.
     *
     * @return array<int, array<string, mixed>> Liste des contacts importés
     */
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

    /**
     * Transforme les données de contact de LinkedIn en votre format de contact local.
     *
     * @param array<string, mixed> $contactData Données de contact de LinkedIn
     *
     * @return array<string, mixed> Données de contact transformées
     */
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
