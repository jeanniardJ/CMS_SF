<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250526134254 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            DROP INDEX name ON config
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE contact CHANGE name name VARCHAR(25) NOT NULL, CHANGE objet objet VARCHAR(50) NOT NULL
        SQL);
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            CREATE UNIQUE INDEX name ON config (name)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE contact CHANGE name name VARCHAR(255) NOT NULL, CHANGE objet objet VARCHAR(255) NOT NULL
        SQL);
    }
}
