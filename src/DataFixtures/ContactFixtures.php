<?php

/**
 * @category DataFixtures
 * @package  App\DataFixtures
 * @author   JJA-DEV
 * @license  JJA DEV © 2021 par Jeanniard Jonathan sous licence MIT.
 * Pour voir une copie de cette licence, visitez https://opensource.org/licenses/MIT
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
