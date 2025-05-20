<?php
//gestion de la connection à la base de données
namespace JeanniardJ\Install;
/**
 * Classe utilisant le pattern Singleton pour la gestion de la connexion à la base de données.
 *
 * Ce pattern garantit qu'une seule instance de la classe db est créée et utilisée tout au long de l'application.
 *
 * Pattern utilisé : Singleton
 */
class db
{
    private $host;
    private $name;
    private $user;
    private $pass;

    public function __construct($host, $name, $user, $pass)
    {
        $this->host = $host;
        $this->name = $name;
        $this->user = $user;
        $this->pass = $pass;
    }

    public function connect()
    {
        try {
            $pdo = new \PDO("mysql:host={$this->host};dbname={$this->name}", $this->user, $this->pass);
            $pdo->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
            return $pdo;
        } catch (\PDOException $e) {
            echo "Erreur de connexion : " . $e->getMessage();
            return null;
        }
    }
}
