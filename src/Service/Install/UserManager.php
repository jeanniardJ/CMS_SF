<?php

namespace App\Service\Install;

use App\Entity\User;
use App\Entity\Role;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

/**
 * Service to manage user creation during installation
 */
class UserManager
{
    private EntityManagerInterface $entityManager;
    private UserPasswordHasherInterface $passwordHasher;
    private ValidatorInterface $validator;

    public function __construct(
        EntityManagerInterface $entityManager,
        UserPasswordHasherInterface $passwordHasher,
        ValidatorInterface $validator
    ) {
        $this->entityManager = $entityManager;
        $this->passwordHasher = $passwordHasher;
        $this->validator = $validator;
    }

    public function createAdminUser(array $userData): array
    {
        try {
            // Validate input data
            $validation = $this->validateUserData($userData);
            if (!$validation['valid']) {
                return [
                    'success' => false,
                    'message' => 'Validation failed',
                    'errors' => $validation['errors']
                ];
            }

            // Check if admin user already exists
            $existingUser = $this->entityManager
                ->getRepository(User::class)
                ->findOneBy(['email' => $userData['email']]);

            if ($existingUser) {
                return [
                    'success' => false,
                    'message' => 'A user with this email already exists'
                ];
            }

            // Create admin role if it doesn't exist
            $adminRole = $this->getOrCreateAdminRole();

            // Create new user
            $user = new User();
            $user->setUsername($userData['username'] ?? $userData['email']);
            $user->setEmail($userData['email']);
            
            // Hash password
            $hashedPassword = $this->passwordHasher->hashPassword($user, $userData['password']);
            $user->setPassword($hashedPassword);
            
            // Set as verified since it's created during installation
            $user->setIsVerified(true);
            
            // Add admin role
            $user->addRoleEntities($adminRole);

            // Validate user entity
            $violations = $this->validator->validate($user);
            if (count($violations) > 0) {
                $errors = [];
                foreach ($violations as $violation) {
                    $errors[] = $violation->getMessage();
                }
                return [
                    'success' => false,
                    'message' => 'User validation failed',
                    'errors' => $errors
                ];
            }

            // Save user
            $this->entityManager->persist($user);
            $this->entityManager->flush();

            return [
                'success' => true,
                'message' => 'Admin user created successfully',
                'user_id' => $user->getId()
            ];

        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => 'User creation failed: ' . $e->getMessage()
            ];
        }
    }

    public function validateUserData(array $userData): array
    {
        $errors = [];

        // Email validation
        if (empty($userData['email'])) {
            $errors[] = 'Email is required';
        } elseif (!filter_var($userData['email'], FILTER_VALIDATE_EMAIL)) {
            $errors[] = 'Email format is invalid';
        }

        // Username validation (optional, will use email if not provided)
        if (!empty($userData['username'])) {
            if (strlen($userData['username']) < 3) {
                $errors[] = 'Username must be at least 3 characters long';
            }
            if (strlen($userData['username']) > 180) {
                $errors[] = 'Username must not exceed 180 characters';
            }
            if (!preg_match('/^[a-zA-Z0-9_.-]+$/', $userData['username'])) {
                $errors[] = 'Username can only contain letters, numbers, dots, hyphens and underscores';
            }
        }

        // Password validation
        if (empty($userData['password'])) {
            $errors[] = 'Password is required';
        } else {
            $password = $userData['password'];
            
            if (strlen($password) < 8) {
                $errors[] = 'Password must be at least 8 characters long';
            }
            
            if (!preg_match('/[A-Z]/', $password)) {
                $errors[] = 'Password must contain at least one uppercase letter';
            }
            
            if (!preg_match('/[a-z]/', $password)) {
                $errors[] = 'Password must contain at least one lowercase letter';
            }
            
            if (!preg_match('/[0-9]/', $password)) {
                $errors[] = 'Password must contain at least one number';
            }
            
            if (!preg_match('/[^a-zA-Z0-9]/', $password)) {
                $errors[] = 'Password must contain at least one special character';
            }
        }

        // Password confirmation
        if (!empty($userData['password']) && !empty($userData['password_confirm'])) {
            if ($userData['password'] !== $userData['password_confirm']) {
                $errors[] = 'Password confirmation does not match';
            }
        } elseif (!empty($userData['password'])) {
            $errors[] = 'Password confirmation is required';
        }

        // Personal information (optional but recommended)
        if (!empty($userData['first_name']) && strlen($userData['first_name']) > 100) {
            $errors[] = 'First name must not exceed 100 characters';
        }

        if (!empty($userData['last_name']) && strlen($userData['last_name']) > 100) {
            $errors[] = 'Last name must not exceed 100 characters';
        }

        return [
            'valid' => empty($errors),
            'errors' => $errors
        ];
    }

    public function checkExistingUsers(): array
    {
        try {
            $userCount = $this->entityManager
                ->getRepository(User::class)
                ->count([]);

            $adminUsers = $this->entityManager
                ->createQueryBuilder()
                ->select('u')
                ->from(User::class, 'u')
                ->join('u.roleEntities', 'r')
                ->where('r.secondName = :adminRole')
                ->setParameter('adminRole', 'ROLE_ADMIN')
                ->getQuery()
                ->getResult();

            return [
                'total_users' => $userCount,
                'admin_users' => count($adminUsers),
                'has_admin' => count($adminUsers) > 0
            ];

        } catch (\Exception $e) {
            return [
                'total_users' => 0,
                'admin_users' => 0,
                'has_admin' => false,
                'error' => $e->getMessage()
            ];
        }
    }

    private function getOrCreateAdminRole(): Role
    {
        $adminRole = $this->entityManager
            ->getRepository(Role::class)
            ->findOneBy(['secondName' => 'ROLE_ADMIN']);

        if (!$adminRole) {
            $adminRole = new Role();
            $adminRole->setName('Administrator');
            $adminRole->setSecondName('ROLE_ADMIN');
            $adminRole->setDescription('Full system administrator access');
            
            $this->entityManager->persist($adminRole);
            $this->entityManager->flush();
        }

        return $adminRole;
    }

    public function getUserTemplate(): array
    {
        return [
            'username' => '',
            'email' => '',
            'password' => '',
            'password_confirm' => '',
            'first_name' => '',
            'last_name' => ''
        ];
    }
}