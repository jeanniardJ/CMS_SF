<?php

/**
 * @category Repository
 *
 * @author   JJA-DEV
 * @license  JJA DEV © 2021 par Jeanniard Jonathan sous licence MIT.
 *
 * @see     https://jja-dev.fr
 */

namespace App\Repository;

use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Security\Core\Exception\UnsupportedUserException;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\PasswordUpgraderInterface;

/**
 * Class UserRepository.
 *
 * @extends ServiceEntityRepository<User>
 *
 * @method User|null find($id, $lockMode = null, $lockVersion = null)
 * @method User|null findOneBy(array $criteria, array $orderBy = null)
 * @method User[]    findAll()
 * @method User[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @method findById($id)
 */
class UserRepository extends ServiceEntityRepository implements PasswordUpgraderInterface
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, User::class);
    }

    /**
     * Used to upgrade (rehash) the user's password automatically over time.
     */
    public function upgradePassword(PasswordAuthenticatedUserInterface $user, string $newHashedPassword): void
    {
        if (!$user instanceof User) {
            throw new UnsupportedUserException(sprintf('Instances of "%s" are not supported.', $user::class));
        }

        $user->setPassword($newHashedPassword);
        $this->getEntityManager()->persist($user);
        $this->getEntityManager()->flush();
    }

    /**
     * @param int    $limit
     * @param int    $offset
     * @param string $search
     * @param string $sort
     * @param string $order
     *
     * @return array<int, array<string, mixed>>
     */
    public function findByTable($limit, $offset, $search = null, $sort = null, $order = 'asc'): array
    {
        $users = $this->createQueryBuilder('u');
        $users->setMaxResults($limit)
            ->setFirstResult($offset);

        if (!empty($search)) {
            $users->andWhere('u.username LIKE :username')
                ->setParameter('username', '%' . $search . '%');
        }

        if (!empty($sort)) {
            if ('isVerified' == $sort && 'desc' == $order) {
                $users->orderBy('u.isVerified', 'DESC');
            } elseif ('isVerified' == $sort && 'asc' == $order) {
                $users->orderBy('u.isVerified', 'ASC');
            }

            if ('email' == $sort && 'desc' == $order) {
                $users->orderBy('u.email', 'DESC');
            } elseif ('email' == $sort && 'asc' == $order) {
                $users->orderBy('u.email', 'ASC');
            }

            if ('username' == $sort && 'desc' == $order) {
                $users->orderBy('u.username', 'DESC');
            } elseif ('username' == $sort && 'asc' == $order) {
                $users->orderBy('u.username', 'ASC');
            }
        } else {
            $users->orderBy('u.id', 'ASC');
        }

        return $users->getQuery()
            ->getArrayResult();
    }

    //    /**
    //     * @return User[] Returns an array of User objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('u')
    //            ->andWhere('u.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('u.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?User
    //    {
    //        return $this->createQueryBuilder('u')
    //            ->andWhere('u.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
