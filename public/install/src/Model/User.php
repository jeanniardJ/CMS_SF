<?php

namespace JeanniardJ\Install\Model;

/**
 * Class User
 * @package JeanniardJ\Install\Model
 *
 * Cette classe l'objet des informations d'un utilisateur.
 */
class User
{
    private $id;
    private $name;
    private $email;
    private $password;

    public function GetId()
    {
        return $this->id;
    }

    public function SetId($id)
    {
        $this->id = $id;
    }

    public function GetName()
    {
        return $this->name;
    }

    public function SetName($name)
    {
        $this->name = $name;
    }

    public function GetEmail()
    {
        return $this->email;
    }

    public function SetEmail($email)
    {
        $this->email = $email;
    }

    public function GetPassword()
    {
        return $this->password;
    }

    public function SetPassword($password)
    {
        $this->password = $password;
    }
}
