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
use App\Entity\ContactReply;
use App\Repository\ContactRepository;
use App\Form\ContactReplyType;
use App\Service\ConfigService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Mime\Address;

#[Route('/admin/contact')]
class ContactAdminController extends AbstractController
{
    #[Route('/{offset?}{limit?}', name: 'app_contact_adm_index', methods: 'GET')]
    public function index(ContactRepository $contactRepository, Request $request, TranslatorInterface $translate): Response
    {
        if ($request->isXmlHttpRequest()) {
            $contacts = [];
            $offset = $request->query->getInt('offset', 0);
            $limit = $request->query->getInt('limit', 10);
            $total = $contactRepository->count([]);
            $rows = $contactRepository->findBy([], ['id' => 'DESC'], $limit, $offset);

            foreach ($rows as $contact) {
                $contacts[] = [
                    'id' => $contact->getId(),
                    'name' => $contact->getName(),
                    'email' => $contact->getEmail(),
                    'phone' => $contact->getPhone(),
                    'objet' => $contact->getObjet(),
                    'sujet' => $contact->getSujet(),
                    'actions' => '<a class="shadow-sm btn btn-info btn-sm text-white" href="' . $this->generateUrl('app_contact_adm_show', ['id' => $contact->getId()]) . '"><i class="bi bi-eye-fill"></i> ' . $translate->trans('admin.contact.show', [], 'contact') . '</a>',
                ];
            }

            return $this->json([
                'rows' => $contacts,
                'total' => $total,
            ]);
        }

        return $this->render('contact/admin/index.html.twig');
    }

    #[Route('/{id}/view', name: 'app_contact_adm_show', methods: ['GET'])]
    public function show(
        Contact $contact,
        Request $request,
        MailerInterface $mailer,
        TranslatorInterface $translate,
        EntityManagerInterface $entityManagerInterface,
        ConfigService $configservice
    ): Response {
        $form = $this->createForm(ContactReplyType::class);
        $form->handleRequest($request);
        $fromEmail = $configservice->getConfigSite()['propriety']['email'];

        if (empty($fromEmail) || !filter_var($fromEmail, FILTER_VALIDATE_EMAIL)) {
            throw new \Exception('L\'adresse email de l\'expéditeur est manquante ou invalide.');
        }

        if ($form->isSubmitted() && $form->isValid()) {
            $reply = $form->getData();
            $contactReply = new ContactReply();
            $message = (new Email())
                ->subject($reply->getObjet())
                ->to($contact->getEmail())
                ->text($reply->getMessage())
                ->html('<p>' . $reply->getMessage() . '</p>')
                ->replyTo($fromEmail);

            try {
                $mailer->send($message);
            } catch (\Exception $e) {
                $this->addFlash('danger', ['toast', $translate->trans('admin.contact.reply.error', [], 'contact')]);
                return $this->redirectToRoute('app_contact_adm_show', ['id' => $contact->getId()], Response::HTTP_SEE_OTHER);
            }

            $contactReply->setContact($contact);
            $contactReply->setObjet($reply->getObjet());
            $contactReply->setMessage($reply->getMessage());
            $entityManagerInterface->persist($contactReply);
            $entityManagerInterface->flush();

            $this->addFlash('success', ['toast', $translate->trans('admin.contact.reply.success', [], 'contact')]);

            return $this->redirectToRoute('app_contact_adm_show', ['id' => $contact->getId()], Response::HTTP_SEE_OTHER);
        }

        return $this->render('contact/admin/show.html.twig', ['contact' => $contact]);
    }

    //Listes les echanges avec le contact a partir de son email depuis le serveur mail
    #[Route('/{id}/mail', name: 'app_contact_adm_show_mail', methods: 'GET')]
    public function showMail(Contact $contact, MailerInterface $mailer, TranslatorInterface $translate): Response
    {
        $mails = [];
        $email = $contact->getEmail();
        $messages = $mailer;

        foreach ($messages as $message) {
            if ($message->getTo()[0]->getAddress() === $email) {
                $mails[] = [
                    'subject' => $message->getSubject(),
                    'body' => $message->getBody(),
                    'date' => $message->getDate(),
                ];
            }
        }

        return $this->render('contact/admin/_show_mail.html.twig', ['mails' => $mails]);
    }

    #[Route('/{id}/delete', name: 'app_contact_adm_delete', methods: 'POST')]
    public function delete(Request $request, Contact $contact, ContactRepository $contactRepository): Response
    {
        if ($this->isCsrfTokenValid('delete' . $contact->getId(), $request->get('_token'))) {
            $contactRepository->remove($contact);
            $this->addFlash('success', 'La suppression du contact à été effectuer.');
        }

        return $this->redirectToRoute('app_contact_adm_index', [], Response::HTTP_SEE_OTHER);
    }

    public function contactsBlock(ContactRepository $contactRepository): Response
    {
        return $this->render('contact/admin/bloc/index.html.twig', ['contacts' => $contactRepository->findAll()]);
    }
}
