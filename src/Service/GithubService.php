<?php

/**
 * @category Service
 *
 * @author   JJA-DEV
 * @license  MIT
 * @see     https://jja-dev.fr
 */

namespace App\Service;

use Github\AuthMethod;
use Github\Client;

/**
 * Classe GithubService.
 *
 * @catégorie Service
 *
 * @paquet  App\Service
 *
 * @auteur   JJA-DEV
 *
 * @licence  MIT
 * @lien     https://jja-dev.fr
 */
class GithubService
{
    private Client $client;

    public function __construct()
    {
        $this->client = new Client();
        $this->client->authenticate($_ENV['GITHUB_SECRET'], null, AuthMethod::ACCESS_TOKEN);
    }

    /**
     * Get repositories from the depository of choice.
     *
     * @param int $page
     *
     * @return array<mixed>
     */
    public function getRepositoriesOrg($page = 0): array
    {
        $repos = [];
        $repos = $this->client->repositories()->org('JJA-DEV-FR', ['page' => $page, 'per_page' => '10']);
        $filteredRepos = [];

        foreach ($repos as $repo) {
            if (false !== strpos($repo['name'], 'Bundle')) {
                $filteredRepos[] = $repo;
            }
        }

        return $filteredRepos;
    }

    /**
     * Get the repository by its owner and name.
     *
     * @param string $owner
     * @param string $repo
     *
     * @return array<mixed>
     */
    public function getRepositoryById(string $owner, string $repo): array
    {
        return $this->client->repositories()->show($owner, $repo);
    }
}
