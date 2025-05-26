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

use App\Import\ImporterInterface;

/**
 * Class ProspectImportService.
 */
class ProspectImportService
{
    private ImporterInterface $importer;

    public function __construct(ImporterInterface $importer)
    {
        $this->importer = $importer;
    }

    public function importProspects(mixed $source): mixed
    {
        return $this->importer->import($source);
    }
}
