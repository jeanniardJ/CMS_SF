<?php

/**
 * @category Controller
 *
 * @author   JJA-DEV
 * @license  JJA DEV © 2021 par Jeanniard Jonathan sous licence MIT.
 * Pour voir une copie de cette licence, visitez https://opensource.org/licenses/MIT
 *
 * @see     https://jja-dev.fr
 */

namespace App\Service;

use App\Repository\ConfigTemplateRepository;

/**
 * Class ConfigTemplateService.
 *
 * @category Service
 *
 * @author   JJA-DEV
 * @license  MIT
 * @see     https://jja-dev.fr
 * This class is a service that retrieves the template configuration.
 */
class ConfigTemplateService
{
    private ConfigTemplateRepository $configTemplateRepository;

    public function __construct(ConfigTemplateRepository $configTemplateRepository)
    {
        $this->configTemplateRepository = $configTemplateRepository;
    }

    /**
     * @return array<string, mixed>
     */
    public function getConfigTemplate(): array
    {
        return $this->configTemplateRepository->findTemplateConfig();
    }
}
