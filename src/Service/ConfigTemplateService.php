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
 * @license  JJA DEV © 2021 par Jeanniard Jonathan sous licence CC BY-NC-ND 4.0.
 * Pour voir une copie de cette licence, visitez https://creativecommons.org/licenses/by-nc-nd/4.0/
 *
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

    public function getConfigTemplate(): array
    {
        return $this->configTemplateRepository->findTemplateConfig();
    }
}
