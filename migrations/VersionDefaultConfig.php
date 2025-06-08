<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class VersionDefaultConfig extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Create config table with default values';
    }

    public function up(Schema $schema): void
    {
        if ($schema->hasTable('config')) {

            $this->postUp($schema);
            $this->write('Table "config" already exists. Skipping creation and inserting default values.');
            return;
        }

        $this->addSql('CREATE TABLE config (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, value JSON NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->postUp($schema);
    }

    public function down(Schema $schema): void
    {
        $this->addSql('DROP TABLE config');
    }

    public function postUp(Schema $schema): void
    {
        $site = [
            'name' => 'My Site',
            'title' => 'My Site Title',
            'url' => 'http://localhost',
            'logo' => 'build/images/blank/40x40.png',
            'favicon' => 'build/images/blank/40x40.png',
            'keywords' => 'My Site Keywords',
            'description' => 'My Site Description',
        ];

        $propriety = [
            'name' => 'My Name',
            'email' => 'contact@jja-dev.fr',
            'phone' => '0123456789',
            'city' => 'My City',
            'address' => 'My Address',
            'zipCode' => '12345',
            'country' => 'My Country',
            'siret' => null,
        ];

        $analytics = [
            'google' => null,
            'facebook' => null,
            'twitter' => null,
            'linkedin' => null,
        ];

        $social = [
            'facebookUrl' => null,
            'twitterUrl' => null,
            'linkedinUrl' => null,
            'instagramUrl' => null,
            'youtubeUrl' => null,
            'whatsappUrl' => null,
        ];

        $this->addSql('INSERT INTO config (name, value) VALUES ("site", :configSite)', ['configSite' => json_encode($site)]);
        $this->addSql('INSERT INTO config (name, value) VALUES ("propriety", :configPropriety)', ['configPropriety' => json_encode($propriety)]);
        $this->addSql('INSERT INTO config (name, value) VALUES ("analyse", :configAnalytics)', ['configAnalytics' => json_encode($analytics)]);
        $this->addSql('INSERT INTO config (name, value) VALUES ("social", :configSocial)', ['configSocial' => json_encode($social)]);

        $this->addSql('ALTER TABLE config ADD UNIQUE INDEX (name)');
    }
}
