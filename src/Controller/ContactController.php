<?php

/**
 * @category Controller
 *
 * @author   JJA-DEV
 * @license  JJA DEV © 2021 par Jeanniard Jonathan sous licence MIT.
 * Pour voir une copie de cette licence, visitez https://opensource.org/licenses/MIT
 *
 * @see     https://jja-dev.fr
 */

namespace App\Controller;

use App\Entity\Contact;
use App\Form\ContactType;
use Doctrine\ORM\EntityManagerInterface;
use Psr\Log\LoggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;

#[Route('/contact')]
class ContactController extends AbstractController
{
    #[Route('/', name: 'app_contact', options: ['sitemap' => true, 'changefreq' => 'monthly', 'priority' => 0.7])]
    public function index(
        Request $request,
        EntityManagerInterface $entityManager,
        TranslatorInterface $translator
    ): Response {
        $contact = new Contact();
        $form = $this->createForm(ContactType::class, $contact);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($contact);
            $entityManager->flush();

            $this->addFlash('success', ['toast', $translator->trans('contact.message.success', [], 'contact')]);

            return $this->redirectToRoute('app_home');
        }

        return $this->render('contact/index.html.twig', [
            'contact' => $contact,
            'form' => $form,
        ]);
    }

    #[Route('/api', name: 'app_contact_api', options: ['sitemap' => false], methods: ['POST'], format: 'json')]
    public function api(Request $request, EntityManagerInterface $entityManager, LoggerInterface $logger): Response
    {
        $data = json_decode($request->getContent(), true);

        $logger->info('New contact request', ['data' => $data]);

        $object = $data['formObject'];
        $name = $data['formName'];
        $email = $data['formEmail'];
        $phone = $data['formPhone'];
        $message = $data['formMessage'];

        $logger->info(
            'New contact request',
            ['object' => $object, 'name' => $name, 'email' => $email, 'phone' => $phone, 'message' => $message]
        );

        if (null !== $object && null !== $name && null !== $email && null !== $phone && null !== $message) {
            $contact = new Contact();
            $contact->setObjet($object);
            $contact->setPhone($phone);
            $contact->setName($name);
            $contact->setEmail($email);
            $contact->setSujet($message);

            $entityManager->persist($contact);

            try {
                $entityManager->flush();
            } catch (\Exception $e) {
                return new Response('error' . $e, Response::HTTP_INTERNAL_SERVER_ERROR);
            }

            return new Response('success', Response::HTTP_CREATED);
        }

        $logger->error('Missing parameters in the request', ['request' => $request]);

        return new Response('error', Response::HTTP_BAD_REQUEST);
    }
}
