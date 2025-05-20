<?php

namespace JeanniardJ\Install;

class Controller
{
    // Méthode pour charger une vue
    protected function render(string $view, array $data = [])
    {
        extract($data);
        require_once __DIR__ . '/View/' . $view . '.php';
    }

    // Méthode pour rediriger vers une autre page
    protected function redirect(string $url)
    {
        header('Location: ' . $url);
        exit;
    }


    // Méthode pour afficher un message de succès
    protected function success(string $message)
    {
        // Logique pour afficher un message de succès
        echo '<p style="color: green;">' . htmlspecialchars($message) . '</p>';
    }

    // Méthode pour gérer les erreurs
    protected function error(string $message)
    {
        // Logique pour gérer les erreurs
        echo '<p style="color: red;">' . htmlspecialchars($message) . '</p>';
    }
}
