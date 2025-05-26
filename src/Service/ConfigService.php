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

use App\Repository\ConfigRepository;

/**
 * Class ConfigService.
 *
 * @category Service
 *
 * @author   JJA-DEV <contact@jja-dev.fr>
 * @license  MIT <https://opensource.org/licenses/MIT>
 *
 * @see     https://jja-dev.fr
 * This class is a service that retrieves the global configuration.
 */
class ConfigService
{
    private ConfigRepository $configRepository;

    public function __construct(ConfigRepository $configRepository)
    {
        $this->configRepository = $configRepository;
    }

    /**
     * Get the global configuration.
     *
     * @return array<mixed>
     */
    public function getConfigSite(): array
    {
        try {
            return $this->configRepository->findGlobalConfig();
        } catch (\Exception $e) {
            return $configSite = [];
        }
    }
}
