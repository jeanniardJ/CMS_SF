<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserFixtures extends Fixture implements DependentFixtureInterface
{
    private UserPasswordHasherInterface $encoder;

    public function __construct(UserPasswordHasherInterface $encoder)
    {
        $this->encoder = $encoder;
    }

    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create();

        $_SERVER['REMOTE_ADDR'] = '127.0.0.1';
        $user = new User();
        $user->setUsername('Jonathan');
        $user->setEmail('contact@jja-dev.fr');
        $user->addRoleEntities($this->getReference('roleUser-2'));
        $user->setPassword($this->encoder->hashPassword($user, 'aA&QXVfv36s267'));

        $user->setIsVerified(true);
        $manager->persist($user);

        $usersData = [
            ['username' => 'Alice123', 'email' => 'alice@email.com', 'password' => 'P@ssw0rd', 'isVerified' => true],
            ['username' => 'Bob456', 'email' => 'bob@email.com', 'password' => 'Qwerty123', 'isVerified' => true],
            ['username' => 'Charlie', 'email' => 'charlie@email.com', 'password' => 'Pass1234', 'isVerified' => false],
            ['username' => 'David_92', 'email' => 'david@email.com', 'password' => 'Abcdefg123', 'isVerified' => true],
            ['username' => 'EvaSmith', 'email' => 'eva@email.com', 'password' => 'MyP@ssw0rd', 'isVerified' => false],
            ['username' => 'Franklin', 'email' => 'frank@email.com', 'password' => 'Franklin123', 'isVerified' => true],
            ['username' => 'GraceH', 'email' => 'grace@email.com', 'password' => 'G1race2H', 'isVerified' => true],
            ['username' => 'HarryPotter', 'email' => 'harry@email.com', 'password' => 'Wizard@123', 'isVerified' => true],
            ['username' => 'IvyLee', 'email' => 'ivy@email.com', 'password' => 'Ivy123', 'isVerified' => false],
            ['username' => 'JackBlack', 'email' => 'jack@email.com', 'password' => 'BlackJack123', 'isVerified' => true],
            ['username' => 'Katherine', 'email' => 'katherine@email.com', 'password' => 'K@ther1ne', 'isVerified' => true],
            ['username' => 'LiamMiller', 'email' => 'liam@email.com', 'password' => 'MillerLiam', 'isVerified' => true],
            ['username' => 'Mia_01', 'email' => 'mia@email.com', 'password' => 'M1aM1a', 'isVerified' => false],
            ['username' => 'Noah123', 'email' => 'noah@email.com', 'password' => 'N0ahN0ah', 'isVerified' => true],
            ['username' => 'OliviaW', 'email' => 'olivia@email.com', 'password' => 'Oliv1@123', 'isVerified' => true],
            ['username' => 'PeterParker', 'email' => 'peter@email.com', 'password' => 'Spiderman123', 'isVerified' => true],
            ['username' => 'QueenBee', 'email' => 'queen@email.com', 'password' => 'Be3Qu33n', 'isVerified' => true],
            ['username' => 'RyanG', 'email' => 'ryan@email.com', 'password' => 'G0Ryan!', 'isVerified' => true],
            ['username' => 'SamanthaJ', 'email' => 'samantha@email.com', 'password' => 'S@manth@123', 'isVerified' => false],
            ['username' => 'TomCruise', 'email' => 'tom@email.com', 'password' => 'M1ssionImp0ssible', 'isVerified' => true],
            ['username' => 'UrsulaSea', 'email' => 'ursula@email.com', 'password' => 'UnderTheSea123', 'isVerified' => true],
            ['username' => 'VioletSky', 'email' => 'violet@email.com', 'password' => 'SkyHigh123', 'isVerified' => true],
            ['username' => 'William', 'email' => 'william@email.com', 'password' => 'Will!@123', 'isVerified' => true],
            ['username' => 'XenaWarrior', 'email' => 'xena@email.com', 'password' => 'Xen@123', 'isVerified' => true],
            ['username' => 'YasmineT', 'email' => 'yasmine@email.com', 'password' => 'Y@smine123', 'isVerified' => true],
            ['username' => 'ZackAttack', 'email' => 'zack@email.com', 'password' => 'Z@ck123', 'isVerified' => true],
        ];

        foreach ($usersData as $user) {
            $user2 = new User();
            $user2->setUsername($user['username']);
            $user2->setEmail($user['email']);
            $user2->addRoleEntities($this->getReference('roleUser-0'));
            $user2->setPassword($this->encoder->hashPassword($user2, $user['password']));
            $manager->persist($user2);
        }

        for ($i = 0; $i < 100; ++$i) {
            $user2 = new User();
            $user2->setUsername($faker->userName);
            $user2->setEmail($faker->email);
            $user2->addRoleEntities($this->getReference('roleUser-0'));
            $user2->setPassword($this->encoder->hashPassword($user2, $faker->password));
            $user2->setIsVerified($faker->boolean);
            $manager->persist($user2);
        }

        $manager->flush();
    }

    public function getDependencies(): array
    {
        return [
            RoleFixtures::class,
        ];
    }
}
