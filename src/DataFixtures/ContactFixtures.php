<?php

/**
 * Copyright (c) 2023. Tous droits réservés.
 * Aucun élément de ce site ne peut être reproduit sans permission écrite préalable.
 * Ce site, son contenu et tous les produits créés par JJA DEV sont protégés par les droits d'auteur.
 * Tous les droits sont réservés à JJA DEV.
 *
 * L'utilisation non autorisée de tout élément de ce site peut constituer une violation des lois applicables.
 * Cela peut entraîner des poursuites judiciaires.
 *
 * Pour utiliser du contenu de ce site, contactez JJA DEV.
 *
 * Merci de respecter notre travail créatif et nos droits de propriété intellectuelle.
 *
 * @category DataFixtures
 * @package  App\DataFixtures
 * @author   JJA-DEV
 * @license  JJA DEV © 2021 par Jeanniard Jonathan sous licence CC BY-NC-ND 4.0.
 * Pour voir une copie de cette licence, visitez https://creativecommons.org/licenses/by-nc-nd/4.0/
 * @link     https://jja-dev.fr
 */

namespace App\DataFixtures;

use App\Entity\Contact;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class ContactFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        // Créez une instance de Faker
        $faker = Factory::create('fr_FR');

        // Créez 10 contacts
        for ($i = 0; $i < 50; ++$i) {
            $contact = new Contact();
            $contact->setName($faker->name());
            $contact->setEmail($faker->email());
            $contact->setPhone($faker->phoneNumber());
            $contact->setObjet($faker->sentence());
            $contact->setSujet($faker->sentence());

            // Persistez l'objet Contact
            $manager->persist($contact);
        }

        // Enregistrez les contacts dans la base de données
        $manager->flush();
    }
}
