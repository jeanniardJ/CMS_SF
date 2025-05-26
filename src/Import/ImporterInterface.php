<?php

/**
 * @category Interface
 *
 * @author   JJA-DEV
 * @license  JJA DEV © 2021 par Jeanniard Jonathan sous licence MIT.
 * Pour voir une copie de cette licence, visitez https://opensource.org/licenses/MIT
 *
 * @see     https://jja-dev.fr
 */

namespace App\Import;

use App\Entity\Contact;

interface ImporterInterface
{
    /**
     * @param string|Contact|\SplFileObject $source
     */
    public function import(mixed $source): mixed;
}
