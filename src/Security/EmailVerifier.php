<?php

/**
 * @category Security
 *
 * @author   JJA-DEV
 * @license  MIT
 * @see     https://jja-dev.fr
 */

namespace App\Security;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use SymfonyCasts\Bundle\VerifyEmail\Exception\VerifyEmailExceptionInterface;
use SymfonyCasts\Bundle\VerifyEmail\VerifyEmailHelperInterface;
use App\Entity\User;

/**
 * Classe EmailVerifier.
 *
 * @catégorie Security
 *
 * @paquet  App\Security
 *
 * @auteur   JJA-DEV
 *
 * @licence  MIT
 * @lien     https://jja-dev.fr
 */
class EmailVerifier
{
    public function __construct(
        private VerifyEmailHelperInterface $verifyEmailHelper,
        private MailerInterface $mailer,
        private EntityManagerInterface $entityManager
    ) {}

    /**
     * Sends an email to the user with a signed URL to confirm their email address.
     *
     * @param User $user The user to send the email to
     *
     */
    public function sendEmailConfirmation(
        string $verifyEmailRouteName,
        User $user,
        TemplatedEmail $email
    ): void {

        if (!$user instanceof User) {
            throw new \InvalidArgumentException('The user must be an instance of the User class.');
        }

        $signatureComponents = $this->verifyEmailHelper->generateSignature(
            $verifyEmailRouteName,
            (string) $user->getId(),
            $user->getEmail()
        );

        $context = $email->getContext();
        $context['signedUrl'] = $signatureComponents->getSignedUrl();
        $context['expiresAtMessageKey'] = $signatureComponents->getExpirationMessageKey();
        $context['expiresAtMessageData'] = $signatureComponents->getExpirationMessageData();

        $email->context($context);

        $this->mailer->send($email);
    }

    /**
     * @throws VerifyEmailExceptionInterface
     */
    public function handleEmailConfirmation(Request $request, User $user): void
    {
        $this->verifyEmailHelper->validateEmailConfirmationFromRequest($request, (string) $user->getId(), $user->getEmail());

        $user->setIsVerified(true);

        $this->entityManager->persist($user);
        $this->entityManager->flush();
    }
}
