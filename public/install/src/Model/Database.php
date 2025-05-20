<?php

namespace JeanniardJ\Install\Model;

/**
 * Class Database
 * @package JeanniardJ\Install\Model
 *
 * Cette classe l'objet des informations de connexion à la base de données.
 */
class Database
{
    private string $host;
    private string $name;
    private string $user;
    private string $pass;

    public function GetHost(): string
    {
        return $this->host;
    }

    public function SetHost(string $host): void
    {
        $this->host = $host;
    }

    public function GetName(): string
    {
        return $this->name;
    }

    public function SetName(string $name): void
    {
        $this->name = $name;
    }

    public function GetUser(): string
    {
        return $this->user;
    }

    public function SetUser(string $user): void
    {
        $this->user = $user;
    }

    public function GetPass(): string
    {
        return $this->pass;
    }

    public function SetPass(string $pass): void
    {
        $this->pass = $pass;
    }
}
