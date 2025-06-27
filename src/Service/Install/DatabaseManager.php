<?php

namespace App\Service\Install;

use Doctrine\DBAL\Connection;
use Doctrine\DBAL\DriverManager;
use Doctrine\DBAL\Exception;
use Symfony\Component\Process\Process;

/**
 * Service to manage database configuration and setup
 */
class DatabaseManager
{
    private string $projectDir;

    public function __construct(string $projectDir)
    {
        $this->projectDir = $projectDir;
    }

    public function testConnection(array $config): array
    {
        try {
            $dsn = $this->buildDsn($config);
            $connection = DriverManager::getConnection(['url' => $dsn]);
            $connection->connect();
            
            // Test if we can create a test table
            $testQuery = match ($config['type']) {
                'mysql' => 'SELECT VERSION() as version',
                'postgresql' => 'SELECT version() as version',
                'sqlite' => 'SELECT sqlite_version() as version',
                default => 'SELECT 1 as test'
            };
            
            $result = $connection->executeQuery($testQuery);
            $version = $result->fetchAssociative();
            
            $connection->close();
            
            return [
                'success' => true,
                'message' => 'Database connection successful',
                'version' => $version['version'] ?? 'Unknown',
                'dsn' => $dsn
            ];
            
        } catch (Exception $e) {
            return [
                'success' => false,
                'message' => 'Database connection failed: ' . $e->getMessage(),
                'error' => $e->getMessage()
            ];
        }
    }

    public function createDatabase(array $config): array
    {
        try {
            if ($config['type'] === 'sqlite') {
                // For SQLite, just test if we can create the file
                $dbPath = $this->projectDir . '/var/data.db';
                $dir = dirname($dbPath);
                
                if (!is_dir($dir)) {
                    mkdir($dir, 0755, true);
                }
                
                if (!is_writable($dir)) {
                    return [
                        'success' => false,
                        'message' => 'Cannot write to database directory: ' . $dir
                    ];
                }
                
                return ['success' => true, 'message' => 'SQLite database path is writable'];
            }
            
            // For MySQL/PostgreSQL, try to create the database
            $adminConfig = $config;
            $adminConfig['name'] = $config['type'] === 'mysql' ? 'mysql' : 'postgres';
            
            $connection = DriverManager::getConnection(['url' => $this->buildDsn($adminConfig)]);
            
            $createQuery = match ($config['type']) {
                'mysql' => sprintf('CREATE DATABASE IF NOT EXISTS `%s`', $config['name']),
                'postgresql' => sprintf('CREATE DATABASE "%s"', $config['name']),
                default => throw new \InvalidArgumentException('Unsupported database type')
            };
            
            $connection->executeStatement($createQuery);
            $connection->close();
            
            return [
                'success' => true,
                'message' => sprintf('Database "%s" created successfully', $config['name'])
            ];
            
        } catch (Exception $e) {
            return [
                'success' => false,
                'message' => 'Database creation failed: ' . $e->getMessage(),
                'error' => $e->getMessage()
            ];
        }
    }

    public function runMigrations(): array
    {
        try {
            // First, create the migration table if it doesn't exist
            $process = new Process([
                'php', 
                'bin/console', 
                'doctrine:migrations:status',
                '--no-interaction'
            ], $this->projectDir);
            
            $process->run();
            
            if ($process->getExitCode() !== 0) {
                return [
                    'success' => false,
                    'message' => 'Cannot check migration status: ' . $process->getErrorOutput()
                ];
            }
            
            // Run migrations
            $process = new Process([
                'php', 
                'bin/console', 
                'doctrine:migrations:migrate',
                '--no-interaction'
            ], $this->projectDir);
            
            $process->run();
            
            if ($process->getExitCode() !== 0) {
                return [
                    'success' => false,
                    'message' => 'Migration failed: ' . $process->getErrorOutput(),
                    'output' => $process->getOutput()
                ];
            }
            
            return [
                'success' => true,
                'message' => 'Database migrations completed successfully',
                'output' => $process->getOutput()
            ];
            
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => 'Migration process failed: ' . $e->getMessage()
            ];
        }
    }

    public function validateConfig(array $config): array
    {
        $errors = [];
        
        if (empty($config['type'])) {
            $errors[] = 'Database type is required';
        } elseif (!in_array($config['type'], ['mysql', 'postgresql', 'sqlite'])) {
            $errors[] = 'Database type must be mysql, postgresql, or sqlite';
        }
        
        if ($config['type'] !== 'sqlite') {
            if (empty($config['host'])) {
                $errors[] = 'Database host is required';
            }
            
            if (empty($config['name'])) {
                $errors[] = 'Database name is required';
            }
            
            if (empty($config['user'])) {
                $errors[] = 'Database username is required';
            }
            
            // Password can be empty for some configurations
            if (!isset($config['password'])) {
                $errors[] = 'Database password field is required (can be empty)';
            }
            
            if (!empty($config['port'])) {
                $port = (int) $config['port'];
                if ($port < 1 || $port > 65535) {
                    $errors[] = 'Database port must be between 1 and 65535';
                }
            }
        }
        
        return [
            'valid' => empty($errors),
            'errors' => $errors
        ];
    }

    private function buildDsn(array $config): string
    {
        switch ($config['type']) {
            case 'mysql':
                $port = $config['port'] ?? 3306;
                $dsn = sprintf(
                    'mysql://%s:%s@%s:%s/%s?charset=utf8mb4',
                    urlencode($config['user']),
                    urlencode($config['password']),
                    $config['host'],
                    $port,
                    $config['name']
                );
                break;
                
            case 'postgresql':
                $port = $config['port'] ?? 5432;
                $dsn = sprintf(
                    'postgresql://%s:%s@%s:%s/%s?charset=utf8',
                    urlencode($config['user']),
                    urlencode($config['password']),
                    $config['host'],
                    $port,
                    $config['name']
                );
                break;
                
            case 'sqlite':
                $dsn = sprintf(
                    'sqlite:///%s/var/data.db',
                    $this->projectDir
                );
                break;
                
            default:
                throw new \InvalidArgumentException('Unsupported database type: ' . $config['type']);
        }
        
        return $dsn;
    }

    public function getDsn(array $config): string
    {
        return $this->buildDsn($config);
    }
}