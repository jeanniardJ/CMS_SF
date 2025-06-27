<?php

namespace App\Tests\Service\Install;

use App\Service\Install\CompatibilityChecker;
use PHPUnit\Framework\TestCase;

class CompatibilityCheckerTest extends TestCase
{
    private CompatibilityChecker $compatibilityChecker;

    protected function setUp(): void
    {
        $this->compatibilityChecker = new CompatibilityChecker();
    }

    public function testCheckPhpVersion(): void
    {
        $result = $this->compatibilityChecker->checkPhpVersion();
        
        $this->assertIsArray($result);
        $this->assertArrayHasKey('name', $result);
        $this->assertArrayHasKey('status', $result);
        $this->assertArrayHasKey('message', $result);
        $this->assertArrayHasKey('required', $result);
        
        $this->assertEquals('PHP Version', $result['name']);
        $this->assertTrue($result['required']);
        
        // PHP version should be 8.2+ for this project
        $this->assertEquals('success', $result['status']);
    }

    public function testCheckExtensions(): void
    {
        $results = $this->compatibilityChecker->checkExtensions();
        
        $this->assertIsArray($results);
        $this->assertNotEmpty($results);
        
        foreach ($results as $result) {
            $this->assertArrayHasKey('name', $result);
            $this->assertArrayHasKey('status', $result);
            $this->assertArrayHasKey('message', $result);
            $this->assertArrayHasKey('required', $result);
            $this->assertTrue($result['required']);
        }
        
        // Check that basic required extensions are present
        $extensionNames = array_column($results, 'name');
        $this->assertContains('json', $extensionNames);
        $this->assertContains('mbstring', $extensionNames);
        $this->assertContains('ctype', $extensionNames);
    }

    public function testCheckMemory(): void
    {
        $result = $this->compatibilityChecker->checkMemory();
        
        $this->assertIsArray($result);
        $this->assertArrayHasKey('name', $result);
        $this->assertArrayHasKey('status', $result);
        $this->assertArrayHasKey('message', $result);
        $this->assertArrayHasKey('required', $result);
        
        $this->assertEquals('Memory Limit', $result['name']);
        $this->assertFalse($result['required']); // Memory is a recommendation, not required
        $this->assertContains($result['status'], ['success', 'warning']);
    }

    public function testCheckAll(): void
    {
        $results = $this->compatibilityChecker->checkAll();
        
        $this->assertIsArray($results);
        $this->assertArrayHasKey('php_version', $results);
        $this->assertArrayHasKey('extensions', $results);
        $this->assertArrayHasKey('directories', $results);
        $this->assertArrayHasKey('memory', $results);
        $this->assertArrayHasKey('network', $results);
        $this->assertArrayHasKey('overall', $results);
        
        // Overall status should be calculated
        $this->assertArrayHasKey('status', $results['overall']);
        $this->assertContains($results['overall']['status'], ['success', 'warning', 'error']);
    }
}