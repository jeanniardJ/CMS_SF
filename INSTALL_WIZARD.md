# CMS SF Installation Wizard

Wizard d'installation et de mise à jour complet pour le CMS SF, avec interface web moderne et intuitive.

## 🎯 Fonctionnalités

### Tests de Compatibilité
- ✅ Vérification de la version PHP (≥8.2)
- ✅ Test des extensions PHP requises (ctype, iconv, intl, mbstring, json, pdo, xml, zip, gd, curl, fileinfo, openssl)
- ✅ Vérification des permissions de fichiers/dossiers
- ✅ Test de l'accès en écriture (var/, public/uploads/, config/, migrations/)
- ✅ Vérification de la mémoire disponible
- ✅ Test de la connectivité réseau

### Configuration Base de Données
- ✅ Support MySQL, PostgreSQL et SQLite
- ✅ Interface pour saisir les paramètres de connexion
- ✅ Test de connexion en temps réel via AJAX
- ✅ Création automatique de la base si elle n'existe pas
- ✅ Validation des paramètres avec feedback utilisateur

### Génération et Configuration du .env
- ✅ Génération automatique d'APP_SECRET sécurisé
- ✅ Configuration automatique des variables d'environnement
- ✅ Support des configurations MAILER_DSN, DATABASE_URL
- ✅ Variables spécifiques au CMS (site, admin, sécurité)

### Configuration Utilisateur Admin
- ✅ Formulaire de création du compte administrateur
- ✅ Validation de sécurité des mots de passe en temps réel
- ✅ Hachage sécurisé du mot de passe
- ✅ Attribution automatique des rôles administrateur

### Paramètres de Configuration du Site
- ✅ Informations générales du site (nom, description, URL)
- ✅ Configuration des emails (expéditeur par défaut)
- ✅ Paramètres de sécurité (timeout session, politique mot de passe, 2FA)
- ✅ Configuration des analytics (Google Analytics, Facebook Pixel, Matomo)
- ✅ Paramètres d'apparence et thème

### Interface Utilisateur
- ✅ Design moderne avec Bootstrap (intégré au thème existant)
- ✅ Interface responsive et accessible
- ✅ Progression visuelle du wizard (6 étapes)
- ✅ Validation en temps réel des formulaires avec JavaScript
- ✅ Messages d'erreur et de succès clairs
- ✅ Indicateurs de force des mots de passe

### Sécurité
- ✅ Désactivation automatique du wizard après installation
- ✅ Vérification de l'état d'installation avant accès
- ✅ Protection CSRF sur tous les formulaires (intégrée à Symfony)
- ✅ Validation stricte des données d'entrée
- ✅ Fichier de verrouillage `.installed`

## 🚀 Utilisation

### Installation Initiale

1. **Déployez le code du CMS** sur votre serveur
2. **Configurez votre serveur web** pour pointer vers le dossier `public/`
3. **Visitez votre site** - vous serez automatiquement redirigé vers `/install`
4. **Suivez le wizard d'installation** :
   - Tests de compatibilité
   - Configuration base de données
   - Création compte admin
   - Configuration du site
   - Finalisation

### Après Installation

Une fois l'installation terminée :
- Le fichier `.installed` verrouille l'accès au wizard
- Vous pouvez accéder à l'administration via `/admin`
- Le site est accessible via l'URL racine

### Réinstallation (Développement uniquement)

Pour réinstaller le système :
1. Supprimez le fichier `.installed` à la racine
2. Optionnel : supprimez `.env.local` 
3. Visitez `/install` pour relancer le wizard

## 🏗 Architecture Technique

### Services d'Installation

```
src/Service/Install/
├── CompatibilityChecker.php    // Tests système
├── DatabaseManager.php         // Gestion BDD
├── EnvironmentManager.php      // Gestion .env
├── UserManager.php            // Création utilisateurs
└── ConfigurationManager.php   // Config générale
```

### Contrôleurs

```
src/Controller/Install/
└── WizardController.php       // Contrôleur principal
```

### Templates

```
templates/install/
├── layout.html.twig           // Layout spécifique
├── welcome.html.twig          // Page d'accueil
├── compatibility.html.twig    // Tests compatibilité
├── database.html.twig         // Config BDD
├── admin_user.html.twig       // Création admin
├── site_config.html.twig      // Config site
├── finalize.html.twig         // Finalisation
├── complete.html.twig         // Installation terminée
└── already_installed.html.twig // Déjà installé
```

### Workflow d'Installation

1. **Welcome** (`/install`) - Présentation et informations
2. **Compatibility** (`/install/compatibility`) - Tests système
3. **Database** (`/install/database`) - Configuration BDD
4. **Admin User** (`/install/admin-user`) - Création admin
5. **Site Config** (`/install/site-config`) - Paramètres site
6. **Finalize** (`/install/finalize`) - Application des configs
7. **Complete** (`/install/complete`) - Installation terminée

## 🔧 Configuration

### Services Symfony

Les services sont automatiquement configurés dans `config/services.yaml` :

```yaml
# Installation Services
App\Service\Install\CompatibilityChecker: ~

App\Service\Install\DatabaseManager:
    arguments:
        $projectDir: '%kernel.project_dir%'

App\Service\Install\EnvironmentManager:
    arguments:
        $projectDir: '%kernel.project_dir%'

App\Service\Install\UserManager: ~

App\Service\Install\ConfigurationManager:
    arguments:
        $projectDir: '%kernel.project_dir%'

App\EventSubscriber\InstallSubscriber:
    arguments:
        $projectDir: '%kernel.project_dir%'
    tags:
        - { name: "kernel.event_subscriber", priority: 100 }
```

### Event Subscriber

L'`InstallSubscriber` gère automatiquement :
- Redirection vers `/install` si non installé
- Blocage de l'accès au wizard si déjà installé
- Préservation des routes d'assets et d'administration

## 🧪 Tests

### Tests Unitaires

```bash
# Test du vérificateur de compatibilité
php bin/phpunit tests/Service/Install/CompatibilityCheckerTest.php

# Demo complet des services
./install-demo.sh
```

### Tests Manuels

1. **Test de compatibilité** : Visitez `/install/compatibility`
2. **Test AJAX** : Utilisez le bouton "Tester la connexion" sur la page BDD
3. **Test de validation** : Saisissez des données incorrectes dans les formulaires
4. **Test de sécurité** : Tentez d'accéder au wizard après installation

## 📋 Prérequis Système

### Serveur Web
- Apache 2.4+ ou Nginx 1.18+
- Réécriture d'URL activée
- HTTPS recommandé

### PHP
- **Version** : 8.2 ou supérieur
- **Extensions requises** :
  - ctype, iconv, intl, mbstring
  - json, pdo, xml, zip
  - gd, curl, fileinfo, openssl
- **Mémoire** : 256M recommandé

### Base de Données
- **MySQL** 8.0+ ou MariaDB 10.4+
- **PostgreSQL** 13+
- **SQLite** 3.25+

### Permissions
- Lecture/écriture sur `var/`, `public/uploads/`
- Lecture sur `config/`, `migrations/`
- Création de fichiers à la racine (`.env.local`, `.installed`)

## 🔍 Dépannage

### Erreurs Courantes

**"Symfony components not found"**
- Exécutez `composer install`

**"Database connection failed"**
- Vérifiez les paramètres de connexion
- Testez la connexion via le bouton dédié

**"Permission denied"**
- Vérifiez les permissions des dossiers `var/` et `public/uploads/`
- Sur Linux : `chmod -R 755 var/ public/uploads/`

**"Installation already completed"**
- Le fichier `.installed` existe
- Supprimez-le uniquement en environnement de développement

### Logs

Les erreurs d'installation sont loggées dans :
- `var/log/dev.log` (développement)
- `var/log/prod.log` (production)

## 🚧 Limitations Connues

- Le wizard nécessite JavaScript pour les fonctionnalités avancées
- La validation en temps réel requiert une connexion internet
- Certains hébergeurs peuvent limiter l'exécution de scripts longs

## 📚 Documentation Complémentaire

- [Symfony Documentation](https://symfony.com/doc/current/index.html)
- [Doctrine ORM](https://www.doctrine-project.org/projects/orm.html)
- [Bootstrap 5](https://getbootstrap.com/docs/5.3/getting-started/introduction/)

---

**Développé avec** : Symfony 6.4, Doctrine ORM, Bootstrap 5, Symfony UX Components