<?php
// Contrôleur principal de l'installateur
namespace JeanniardJ\Install\Controller;

use JeanniardJ\Install\Controller;
use JeanniardJ\Install\db;

/**
 * Class InstallController
 * @package JeanniardJ\Install\Controller
 *
 * Ce contrôleur gère les différentes étapes de l'installation.
 * Il utilise le pattern MVC pour séparer la logique de présentation et la logique métier.
 */

class InstallController extends Controller
{

    public function __construct()
    {
        // Initialisation du fichier de configuration .env symfony
        if (!file_exists(__DIR__ . '../../.env')) {
            file_put_contents(__DIR__ . '../../.env', 'APP_ENV=Prod' . PHP_EOL);
        }
    }

    public function home()
    {
        $this->render('welcome');
    }

    public function database()
    {
        $data = [
            'db_host' => '',
            'db_name' => '',
            'db_user' => '',
            'db_pass' => ''
        ];

        // Si le formulaire est soumis, traiter les données
        if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['db_host']) && isset($_POST['db_name']) && isset($_POST['db_user']) && isset($_POST['db_pass'])) {
            $data = array_map('trim', $_POST);
            // Validation des données
            if (empty($data['db_host']) || empty($data['db_name']) || empty($data['db_user']) || empty($data['db_pass'])) {
                $_SESSION['error'] = 'Tous les champs sont obligatoires.';
                $_SESSION['data'] = $data;

                $this->redirect('index.php?step=database');
            } else {
                // Connexion à la base de données
                $db = new db($data['db_host'], $data['db_name'], $data['db_user'], $data['db_pass']);
                $pdo = $db->connect();

                if (!$pdo) {
                    $_SESSION['error'] = 'Erreur de connexion à la base de données.';
                    $_SESSION['data'] = $data;

                    $this->redirect('index.php?step=database');
                }

                // Si la connexion est réussie, enregistrer les données dans la session
                $_SESSION['data_db'] = $data;

                $this->success('Connexion à la base de données réussie.');
                // Enregistrer les données dans le fichier .env
                $envContent = "DATABASE_URL=\"mysql://{$data['db_user']}:{$data['db_pass']}@{$data['db_host']}/{$data['db_name']}\"\n";
                file_put_contents(__DIR__ . '../../.env', $envContent, FILE_APPEND);

                $this->success($pdo->getAttribute(\PDO::ATTR_CONNECTION_STATUS));

                unset($_SESSION['data']);
                // Rediriger vers l'étape suivante
                $this->redirect('index.php?step=user');
                exit;
            }
        }

        if (isset($_SESSION['error'])) {
            $this->error($_SESSION['error']);
            unset($_SESSION['error']);
        }

        if (isset($_SESSION['success'])) {
            $this->success($_SESSION['success']);
            unset($_SESSION['success']);
        }

        $this->render('database', $data);
    }

    public function user()
    {
        // Logique pour la création de l'utilisateur
        $data = [
            'username' => '',
            'password' => '',
            'confirm_password' => ''
        ];

        // Si le formulaire est soumis, traiter les données

        $this->render('user');
    }

    public function finish()
    {
        // Logique pour terminer l'installation
        $this->render('finish');
    }
}
