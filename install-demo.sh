#!/bin/bash

# Installation Wizard Demo Script
# This script demonstrates the CMS installation workflow

echo "🚀 CMS SF Installation Wizard Demo"
echo "=================================="

# Check if we're in the correct directory
if [ ! -f "composer.json" ]; then
    echo "❌ Error: Run this script from the project root directory"
    exit 1
fi

echo "📋 Step 1: Checking system compatibility..."
php -r "
require 'vendor/autoload.php';
use App\Service\Install\CompatibilityChecker;

try {
    \$checker = new CompatibilityChecker();
    \$result = \$checker->checkPhpVersion();
    echo '✓ PHP Version: ' . \$result['message'] . PHP_EOL;
    
    \$extensions = \$checker->checkExtensions();
    \$success = 0;
    foreach (\$extensions as \$ext) {
        if (\$ext['status'] === 'success') \$success++;
    }
    echo '✓ Extensions: ' . \$success . '/' . count(\$extensions) . ' loaded' . PHP_EOL;
    
    \$memory = \$checker->checkMemory();
    echo '✓ Memory: ' . \$memory['message'] . PHP_EOL;
    
} catch (Exception \$e) {
    echo '❌ Error: ' . \$e->getMessage() . PHP_EOL;
}
"

echo ""
echo "📋 Step 2: Database configuration test..."
php -r "
require 'vendor/autoload.php';
use App\Service\Install\DatabaseManager;

try {
    \$dbManager = new DatabaseManager(__DIR__);
    
    // Test SQLite configuration
    \$config = [
        'type' => 'sqlite',
        'host' => '',
        'name' => '',
        'user' => '',
        'password' => ''
    ];
    
    \$validation = \$dbManager->validateConfig(\$config);
    if (\$validation['valid']) {
        echo '✓ SQLite configuration validation passed' . PHP_EOL;
        \$dsn = \$dbManager->getDsn(\$config);
        echo '✓ SQLite DSN: ' . \$dsn . PHP_EOL;
    } else {
        echo '❌ SQLite validation failed: ' . implode(', ', \$validation['errors']) . PHP_EOL;
    }
    
} catch (Exception \$e) {
    echo '❌ Error: ' . \$e->getMessage() . PHP_EOL;
}
"

echo ""
echo "📋 Step 3: Environment file generation test..."
php -r "
require 'vendor/autoload.php';
use App\Service\Install\EnvironmentManager;

try {
    \$envManager = new EnvironmentManager(__DIR__);
    
    \$config = \$envManager->getEnvironmentTemplate();
    \$config['app_env'] = 'prod';
    \$config['app_secret'] = \$envManager->generateSecretKey();
    \$config['database_url'] = 'sqlite:///' . __DIR__ . '/var/data.db';
    
    \$validation = \$envManager->validateEnvironmentConfig(\$config);
    if (\$validation['valid']) {
        echo '✓ Environment configuration validation passed' . PHP_EOL;
        echo '✓ Generated APP_SECRET: ' . substr(\$config['app_secret'], 0, 16) . '...' . PHP_EOL;
    } else {
        echo '❌ Environment validation failed: ' . implode(', ', \$validation['errors']) . PHP_EOL;
    }
    
} catch (Exception \$e) {
    echo '❌ Error: ' . \$e->getMessage() . PHP_EOL;
}
"

echo ""
echo "📋 Step 4: User validation test..."
php -r "
require 'vendor/autoload.php';

// Mock the required services for testing
class MockEntityManager {
    public function getRepository(\$class) { return new MockRepository(); }
    public function persist(\$entity) {}
    public function flush() {}
}

class MockRepository {
    public function findOneBy(\$criteria) { return null; }
}

class MockPasswordHasher {
    public function hashPassword(\$user, \$password) { return password_hash(\$password, PASSWORD_DEFAULT); }
}

class MockValidator {
    public function validate(\$entity) { return new ArrayObject(); }
}

try {
    \$userManager = new App\Service\Install\UserManager(
        new MockEntityManager(),
        new MockPasswordHasher(),
        new MockValidator()
    );
    
    \$userData = [
        'email' => 'admin@example.com',
        'username' => 'admin',
        'password' => 'StrongPassword123!',
        'password_confirm' => 'StrongPassword123!',
        'first_name' => 'Admin',
        'last_name' => 'User'
    ];
    
    \$validation = \$userManager->validateUserData(\$userData);
    if (\$validation['valid']) {
        echo '✓ User data validation passed' . PHP_EOL;
        echo '✓ Admin user ready for creation' . PHP_EOL;
    } else {
        echo '❌ User validation failed: ' . implode(', ', \$validation['errors']) . PHP_EOL;
    }
    
} catch (Exception \$e) {
    echo '❌ Error: ' . \$e->getMessage() . PHP_EOL;
}
"

echo ""
echo "🎉 Installation Wizard Demo Complete!"
echo ""
echo "To test the full installation:"
echo "1. Remove the .installed file (if it exists)"
echo "2. Start the Symfony development server: symfony server:start"
echo "3. Visit http://localhost:8000/install"
echo "4. Follow the installation wizard steps"
echo ""
echo "The wizard will guide you through:"
echo "- System compatibility checks"
echo "- Database configuration" 
echo "- Admin user creation"
echo "- Site configuration"
echo "- Final installation and lock"