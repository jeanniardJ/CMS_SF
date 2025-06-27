<?php

namespace App\Service\Install;

use Symfony\Component\Process\Process;

/**
 * Service to check system compatibility for CMS installation
 */
class CompatibilityChecker
{
    private array $requirements = [
        'php_version' => '8.2',
        'extensions' => [
            'ctype',
            'iconv',
            'intl',
            'mbstring',
            'json',
            'pdo',
            'xml',
            'zip',
            'gd',
            'curl',
            'fileinfo',
            'openssl'
        ],
        'directories' => [
            'var/',
            'var/cache/',
            'var/log/',
            'public/uploads/',
            'config/',
            'migrations/'
        ]
    ];

    public function checkAll(): array
    {
        return [
            'php_version' => $this->checkPhpVersion(),
            'extensions' => $this->checkExtensions(),
            'directories' => $this->checkDirectories(),
            'memory' => $this->checkMemory(),
            'network' => $this->checkNetwork(),
            'overall' => $this->getOverallStatus()
        ];
    }

    public function checkPhpVersion(): array
    {
        $currentVersion = PHP_VERSION;
        $required = $this->requirements['php_version'];
        $valid = version_compare($currentVersion, $required, '>=');

        return [
            'name' => 'PHP Version',
            'status' => $valid ? 'success' : 'error',
            'message' => sprintf(
                'PHP %s (required: %s+)', 
                $currentVersion, 
                $required
            ),
            'required' => true
        ];
    }

    public function checkExtensions(): array
    {
        $results = [];
        
        foreach ($this->requirements['extensions'] as $extension) {
            $loaded = extension_loaded($extension);
            $results[] = [
                'name' => $extension,
                'status' => $loaded ? 'success' : 'error',
                'message' => sprintf(
                    'Extension %s %s', 
                    $extension, 
                    $loaded ? 'loaded' : 'missing'
                ),
                'required' => true
            ];
        }

        return $results;
    }

    public function checkDirectories(): array
    {
        $results = [];
        $projectDir = dirname(dirname(dirname(__DIR__)));
        
        foreach ($this->requirements['directories'] as $dir) {
            $fullPath = $projectDir . '/' . $dir;
            $exists = is_dir($fullPath);
            $writable = $exists && is_writable($fullPath);
            
            $status = 'error';
            $message = sprintf('Directory %s not found', $dir);
            
            if ($exists && $writable) {
                $status = 'success';
                $message = sprintf('Directory %s is writable', $dir);
            } elseif ($exists) {
                $status = 'warning';
                $message = sprintf('Directory %s exists but is not writable', $dir);
            }
            
            $results[] = [
                'name' => $dir,
                'status' => $status,
                'message' => $message,
                'required' => true
            ];
        }

        return $results;
    }

    public function checkMemory(): array
    {
        $memoryLimit = ini_get('memory_limit');
        $memoryBytes = $this->convertToBytes($memoryLimit);
        $required = 256 * 1024 * 1024; // 256MB
        
        $valid = $memoryBytes >= $required || $memoryLimit === '-1';
        
        return [
            'name' => 'Memory Limit',
            'status' => $valid ? 'success' : 'warning',
            'message' => sprintf(
                'Memory limit: %s (recommended: 256M+)', 
                $memoryLimit
            ),
            'required' => false
        ];
    }

    public function checkNetwork(): array
    {
        $testUrl = 'https://repo.packagist.org/packages.json';
        $context = stream_context_create([
            'http' => [
                'timeout' => 10,
                'user_agent' => 'CMS-SF/1.0 Installation Checker'
            ]
        ]);
        
        $accessible = @file_get_contents($testUrl, false, $context) !== false;
        
        return [
            'name' => 'Network Connectivity',
            'status' => $accessible ? 'success' : 'warning',
            'message' => $accessible 
                ? 'Network access available for package downloads'
                : 'Network access limited - manual package installation may be required',
            'required' => false
        ];
    }

    private function convertToBytes(string $value): int
    {
        if ($value === '-1') {
            return PHP_INT_MAX;
        }
        
        $value = trim($value);
        $last = strtolower($value[strlen($value) - 1]);
        $value = (int) $value;
        
        switch ($last) {
            case 'g':
                $value *= 1024;
                // no break
            case 'm':
                $value *= 1024;
                // no break
            case 'k':
                $value *= 1024;
        }
        
        return $value;
    }

    private function getOverallStatus(): array
    {
        $checks = [
            $this->checkPhpVersion(),
            ...$this->checkExtensions(),
            ...$this->checkDirectories()
        ];
        
        $hasErrors = false;
        $hasWarnings = false;
        
        foreach ($checks as $check) {
            if ($check['status'] === 'error' && $check['required']) {
                $hasErrors = true;
            } elseif ($check['status'] === 'warning') {
                $hasWarnings = true;
            }
        }
        
        if ($hasErrors) {
            $status = 'error';
            $message = 'System requirements not met. Please fix the errors above.';
        } elseif ($hasWarnings) {
            $status = 'warning';
            $message = 'System requirements mostly met. Some warnings should be addressed.';
        } else {
            $status = 'success';
            $message = 'All system requirements met. Installation can proceed.';
        }
        
        return [
            'name' => 'Overall Status',
            'status' => $status,
            'message' => $message,
            'required' => true
        ];
    }
}