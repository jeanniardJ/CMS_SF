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

use App\Entity\Prospect;
use App\Entity\Status;
use App\Import\ImporterInterface;
use Doctrine\ORM\EntityManagerInterface;

/**
 * Classe ContactModuleImporter.
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
class ContactModuleImporter implements ImporterInterface
{
    private EntityManagerInterface $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function import(mixed $contact): Prospect
    {
        $prospect = new Prospect();
        $prospect->setFirstname($contact->getName());
        $prospect->setEmail($contact->getEmail());
        $prospect->setPhone($contact->get);
        $prospect->setStatus($this->entityManager->getRepository(Status::class)->find(1));
        $this->entityManager->persist($prospect);
        $this->entityManager->flush();

        return $prospect;
    }
}
