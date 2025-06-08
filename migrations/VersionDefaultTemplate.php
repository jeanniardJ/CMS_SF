<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class VersionDefaultTemplate extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Create template table with default values';
    }

    public function up(Schema $schema): void
    {
        if ($schema->hasTable('config_template')) {
            $this->postUp($schema);
            return;
        }

        $this->addSql('CREATE TABLE config_template (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, value JSON NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->postUp($schema);
    }

    public function down(Schema $schema): void
    {
        $this->addSql('DROP TABLE config_template');
    }

    public function postUp(Schema $schema): void
    {
        $presentation = [
            'title' => 'Conception de site web sur mesure',
            'description' => 'Spécialisé dans la conception et le développement de sites web et d\'applications sur mesure, je suis passionné par mon métier. Mon objectif est de fournir des produits de haute qualité, adaptés aux besoins uniques de mes clients. Grâce à mon expertise, je m\'assure que chaque projet est un succès.',
        ];

        $description = [
            'title' => 'Services de Création Web Personnalisée',
            'description' => '<p class="lead">Je crée des sites web performants pour mes clients en Bourgogne-Franche-Comté. Je travaille avec vous pour fournir des solutions innovantes pour votre site internet sur mesure.</p>
                              <p class="lead">Je m\'engage à garantir que chaque projet reflète fidèlement l\'identité de votre entreprise. Je propose des services de maintenance pour assurer la sécurité de votre site web. Faites confiance à mon expertise pour concrétiser votre vision en ligne.</p>
                              <p class="lead">Avec une approche personnalisée, j\'assure que chaque site est optimisé pour une performance maximale, tant en termes de vitesse que de fonctionnalité. Je suis également disponible pour des consultations continues pour vous aider à tirer le meilleur parti de votre présence en ligne.</p>',
        ];

        $services = [
            [
                'title' => 'Portfolio',
                'description' => 'Portfolio pour exposer vos réalisations. Montrez votre travail de manière professionnelle et engageante.',
                'price' => '800',
                'icon' => 'fa fa-briefcase',
            ],
            [
                'title' => 'Blog',
                'description' => 'Blog pour partager vos articles et actualités. Parfait pour créer du contenu et attirer des lecteurs.',
                'price' => '1000',
                'icon' => 'fa fa-rss',
            ],
            [
                'title' => 'Site vitrine',
                'description' => 'Site vitrine pour présenter votre activité. Créez une présence en ligne claire et attrayante.',
                'price' => '1300',
                'icon' => 'fa fa-desktop',
            ],
            [
                'title' => 'Application web',
                'description' => 'Application web sur mesure pour vos besoins spécifiques. Fonctionnalités interactives adaptées à votre entreprise.',
                'price' => '1700',
                'icon' => 'fa fa-cogs',
            ],
            [
                'title' => 'Site e-commerce',
                'description' => 'Site e-commerce pour vendre vos produits en ligne. Gestion des ventes, commandes et expérience utilisateur fluide.',
                'price' => '2500',
                'icon' => 'fa fa-shopping-cart',
            ],
        ];

        $this->addSql('INSERT INTO config_template (name, value) VALUES ("presentation", :configPresentation)', ['configPresentation' => json_encode($presentation)]);
        $this->addSql('INSERT INTO config_template (name, value) VALUES ("description", :configDescription)', ['configDescription' => json_encode($description)]);
        $this->addSql('INSERT INTO config_template (name, value) VALUES ("services", :configServices)', ['configServices' => json_encode($services)]);
    }
}
