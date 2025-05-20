<?php
// Routeur générique pour l'installateur standalone

require_once __DIR__ . '/vendor/autoload.php';

use JeanniardJ\Install\Controller\InstallController;

// Routing simple
switch ($_REQUEST['step'] ?? '') {
    case '':
    case 'welcome':
        (new InstallController())->home();
        break;
    case 'database':
        (new InstallController())->database();
        break;
    case 'user':
        (new InstallController())->user();
        break;
    case 'finish':
        (new InstallController())->finish();
        break;
    default:
        http_response_code(404);
        echo '<h1>404 Not Found</h1>';
        echo 'Page non trouvée';
        break;
}
