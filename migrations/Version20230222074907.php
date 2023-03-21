<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230222074907 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TEMPORARY TABLE __temp__employee AS SELECT id, company_id, firstname, lastname, position, adresse, birthday, salary FROM employee');
        $this->addSql('DROP TABLE employee');
        $this->addSql('CREATE TABLE employee (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, company_id INTEGER NOT NULL, firstname VARCHAR(255) NOT NULL, lastname VARCHAR(255) NOT NULL, position VARCHAR(255) NOT NULL, adresse VARCHAR(255) NOT NULL, birthday DATETIME NOT NULL --(DC2Type:datetime_immutable)
        , salary INTEGER NOT NULL, wants_newletter BOOLEAN DEFAULT NULL, email VARCHAR(255) NOT NULL, CONSTRAINT FK_5D9F75A1979B1AD6 FOREIGN KEY (company_id) REFERENCES company (id) ON UPDATE NO ACTION ON DELETE NO ACTION NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO employee (id, company_id, firstname, lastname, position, adresse, birthday, salary) SELECT id, company_id, firstname, lastname, position, adresse, birthday, salary FROM __temp__employee');
        $this->addSql('DROP TABLE __temp__employee');
        $this->addSql('CREATE INDEX IDX_5D9F75A1979B1AD6 ON employee (company_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TEMPORARY TABLE __temp__employee AS SELECT id, company_id, firstname, lastname, position, adresse, birthday, salary FROM employee');
        $this->addSql('DROP TABLE employee');
        $this->addSql('CREATE TABLE employee (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, company_id INTEGER NOT NULL, firstname VARCHAR(255) NOT NULL, lastname VARCHAR(255) NOT NULL, position VARCHAR(255) NOT NULL, adresse VARCHAR(255) NOT NULL, birthday DATETIME NOT NULL --(DC2Type:datetime_immutable)
        , salary DOUBLE PRECISION NOT NULL, CONSTRAINT FK_5D9F75A1979B1AD6 FOREIGN KEY (company_id) REFERENCES company (id) NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO employee (id, company_id, firstname, lastname, position, adresse, birthday, salary) SELECT id, company_id, firstname, lastname, position, adresse, birthday, salary FROM __temp__employee');
        $this->addSql('DROP TABLE __temp__employee');
        $this->addSql('CREATE INDEX IDX_5D9F75A1979B1AD6 ON employee (company_id)');
    }
}
