<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240731172033 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE contact_reply (id INT AUTO_INCREMENT NOT NULL, contact_id INT NOT NULL, objet VARCHAR(50) NOT NULL, message LONGTEXT NOT NULL, INDEX IDX_D082D6EFE7A1254A (contact_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE contact_reply ADD CONSTRAINT FK_D082D6EFE7A1254A FOREIGN KEY (contact_id) REFERENCES contact (id)');
        $this->addSql('ALTER TABLE interaction_history DROP FOREIGN KEY FK_47FC472AD182060A');
        $this->addSql('ALTER TABLE note DROP FOREIGN KEY FK_CFBDFA14D182060A');
        $this->addSql('ALTER TABLE prospect DROP FOREIGN KEY FK_C9CE8C7D26ED0855');
        $this->addSql('ALTER TABLE prospect DROP FOREIGN KEY FK_C9CE8C7D6BF700BD');
        $this->addSql('ALTER TABLE reminder DROP FOREIGN KEY FK_40374F40D182060A');
        $this->addSql('DROP TABLE appointments');
        $this->addSql('DROP TABLE interaction_history');
        $this->addSql('DROP TABLE note');
        $this->addSql('DROP TABLE prospect');
        $this->addSql('DROP TABLE reminder');
        $this->addSql('DROP INDEX name ON config');
        $this->addSql('ALTER TABLE contact CHANGE name name VARCHAR(25) NOT NULL, CHANGE objet objet VARCHAR(50) NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE appointments (id INT AUTO_INCREMENT NOT NULL, user_email VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, date DATE NOT NULL, time TIME NOT NULL COMMENT \'(DC2Type:time_immutable)\', type VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, first_name VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, last_name VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, meeting_mode VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, phone VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, company VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, notes VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, status VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, location VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, reminder_sent TINYINT(1) DEFAULT 0 NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE interaction_history (id INT AUTO_INCREMENT NOT NULL, prospect_id INT NOT NULL, interaction_date DATETIME NOT NULL, interaction_type VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, notes LONGTEXT CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, INDEX IDX_47FC472AD182060A (prospect_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE note (id INT AUTO_INCREMENT NOT NULL, prospect_id INT DEFAULT NULL, content LONGTEXT CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, author VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, UNIQUE INDEX UNIQ_CFBDFA14D182060A (prospect_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE prospect (id INT AUTO_INCREMENT NOT NULL, status_id INT NOT NULL, note_id INT DEFAULT NULL, firstname VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, lastname VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, position VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, location VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, website VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, email VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, phone VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, INDEX IDX_C9CE8C7D6BF700BD (status_id), UNIQUE INDEX UNIQ_C9CE8C7D26ED0855 (note_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE reminder (id INT AUTO_INCREMENT NOT NULL, prospect_id INT NOT NULL, title VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, description LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, reminder_date DATETIME NOT NULL, is_completed TINYINT(1) NOT NULL, INDEX IDX_40374F40D182060A (prospect_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE interaction_history ADD CONSTRAINT FK_47FC472AD182060A FOREIGN KEY (prospect_id) REFERENCES prospect (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE note ADD CONSTRAINT FK_CFBDFA14D182060A FOREIGN KEY (prospect_id) REFERENCES prospect (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE prospect ADD CONSTRAINT FK_C9CE8C7D26ED0855 FOREIGN KEY (note_id) REFERENCES note (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE prospect ADD CONSTRAINT FK_C9CE8C7D6BF700BD FOREIGN KEY (status_id) REFERENCES status (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE reminder ADD CONSTRAINT FK_40374F40D182060A FOREIGN KEY (prospect_id) REFERENCES prospect (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE contact_reply DROP FOREIGN KEY FK_D082D6EFE7A1254A');
        $this->addSql('DROP TABLE contact_reply');
        $this->addSql('CREATE UNIQUE INDEX name ON config (name)');
        $this->addSql('ALTER TABLE contact CHANGE name name VARCHAR(255) NOT NULL, CHANGE objet objet VARCHAR(255) NOT NULL');
    }
}
