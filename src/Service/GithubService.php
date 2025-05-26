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
 * @licence  JJA DEV © 2021 par Jeanniard Jonathan sous licence CC BY-NC-ND 4.0.
 * Pour consulter une copie de cette licence, visitez https://creativecommons.org/licenses/by-nc-nd/4.0/
 *
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
     * Get repositories from the JJA-DEV-FR organization.
     *
     * @param int $page
     *
     * @return array<mixed>
     */
    public function getRepositoriesOrg($page = 0): array
    {
        $repos = [];
        $repos = $this->client->api('repos')->org('JJA-DEV-FR', ['page' => $page, 'per_page' => '10']);
        $filteredRepos = [];

        foreach ($repos as $repo) {
            if (false !== strpos($repo['name'], 'Bundle')) {
                $filteredRepos[] = $repo;
            }
        }

        return $filteredRepos;
    }

    /**
     * Get the repository by its id.
     *
     * @param int $id
     *
     * @return array<mixed>
     */
    public function getRepositoryById($id): array
    {
        return $this->client->api('repos')->showById($id);
    }
}
