<?php

namespace App\Tests\Entity;

use App\Entity\Contact;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;
use Symfony\Component\Validator\ConstraintViolation;
use Symfony\Component\Validator\Validator\ValidatorInterface;

// TODO: Testé la longueur minimum du nombre de characters
// TODO: Testé le numéro de téléphone
class ContactTest extends KernelTestCase
{
    private ValidatorInterface $validator;

    /**
     * @dataProvider dataValideProvider
     */
    public function testValidContact(string $name, string $email, string $phone, string $objet, string $sujet): void
    {
        $contact = (new Contact())
            ->setName($name)
            ->setEmail($email)
            ->setPhone($phone)
            ->setObjet($objet)
            ->setSujet($sujet);

        $violations = $this->validator->validate($contact);

        $this->assertCount(0, $violations);
    }

    public function testInvalidContact(): void
    {
        $contact = new Contact();

        // Simulate an invalid contact with missing required fields
        $violations = $this->validator->validate($contact);

        // Assert that there are validation violations
        $this->assertCount(5, $violations);

        // Assert specific violations for required fields
        /** @var iterable<ConstraintViolation> $violations */
        $this->assertHasViolation($violations, 'sujet', 'Cette valeur ne doit pas être vide.');
        $this->assertHasViolation($violations, 'name', 'Cette valeur ne doit pas être vide.');
        $this->assertHasViolation($violations, 'email', 'Cette valeur ne doit pas être vide.');
        $this->assertHasViolation($violations, 'phone', 'Cette valeur ne doit pas être vide.');
        $this->assertHasViolation($violations, 'objet', 'Cette valeur ne doit pas être vide.');
    }

    /**
     * Assert that a specific violation exists in the collection of violations.
     *
     * @param iterable<ConstraintViolation> $violations The collection of violations to search in.
     * @param string $propertyPath The property path of the violation to check.
     * @param string $message The expected message of the violation.
     */
    private function assertHasViolation(iterable $violations, string $propertyPath, string $message): void
    {
        foreach ($violations as $violation) {
            /** @var ConstraintViolation $violation */
            if ($violation->getPropertyPath() === $propertyPath && $violation->getMessage() === $message) {
                $this->addToAssertionCount(1);

                return;
            }
        }

        $this->fail(sprintf('No violation found for property "%s" with message "%s".', $propertyPath, $message));
    }

    public static function dataValideProvider(): mixed
    {
        return [
            ['John Doe', 'john@example.com', '0123456780', 'Sujet 1 dssdsfdsfs', 'Objet 1 dsq dsq dsq dsq dsq dqs dsq dfdsfsfds dsqdsq dsq dsqfdsqfdsqfs'],
            ['Jane Smith', 'jane@example.com', '9876543210', 'Sujet 2 dsdsfdsf', 'Objet 2 dsqdsqdsq dqsdsqfdsqdqsd sqds qfdsfds'],
            ['Alice Johnson', 'alice@example.com', '5555555550', 'Sujet 3 dsds fdsfds', 'Objet 3 dsqdsq dqs dqsd sqdqs fdsfdsfds'],
            ['Robert Brown', 'robert@example.com', '1111111110', 'Sujet 4 dsds fdsfsd', 'Objet 4dsq dsq d sqdsqd sq dsq fdsfdsfsd'],
            ['Emma White', 'emma@example.com', '2222222220', 'Sujet 5 dsdsfds fds', 'Objet 5 dsq dsqd sq dsqd qsdsqd qsdsqfdsf fdsf'],
            ['Michael Wilson', 'michael@example.com', '3333333330', 'Sujet 6 dsdsfds', 'Objet 6d sqdsq dsqdsqd sdq sdq fdsfsdf'],
            ['Sophia Lee', 'sophia@example.com', '4444444440', 'Sujet 7 dsds fds', 'Objet 7 dsqd qsdqs ds qdsqd fdsfsd'],
        ];
    }

    protected function setUp(): void
    {
        self::bootKernel();
        $container = static::getContainer();
        $this->validator = $container->get(ValidatorInterface::class);
    }
}
