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

use App\Form\ConfigTemplateType;
use App\Model\ConfigTemplateDesc;
use App\Model\ConfigTemplatePresentation;
use App\Model\ConfigTemplateService;
use App\Repository\ConfigTemplateRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * Class ConfigTemplateAdminController.
 *
 * @autor JJA-DEV
 *
 * @license JJA DEV © 2021 par Jeanniard Jonathan sous licence MIT.
 * Pour voir une copie de cette licence, visitez https://opensource.org/licenses/MIT
 *
 * @see https://jja-dev.fr
 */
#[Route('/admin/config/template')]
class ConfigTemplateAdminController extends AbstractController
{
    #[Route('/', name: 'app_config_template_admin')]
    public function index(ConfigTemplateRepository $configTemplateRepository, Request $request, EntityManagerInterface $entityManagerInterface, SerializerInterface $serializerInterface): Response
    {
        $presentation = $configTemplateRepository->findOneByName('presentation');
        $description = $configTemplateRepository->findOneByName('description');
        $servicesDatas = $configTemplateRepository->findOneByName('services');

        $presentationUnserialise = $serializerInterface->deserialize(json_encode($presentation->getValue()), ConfigTemplatePresentation::class, 'json');
        $descriptionUnserialise = $serializerInterface->deserialize(json_encode($description->getValue()), ConfigTemplateDesc::class, 'json');
        $servicesUnserialise = $serializerInterface->deserialize(json_encode($servicesDatas->getValue()), ConfigTemplateService::class . '[]', 'json');

        $form = $this->createForm(ConfigTemplateType::class, [
            'presentation' => $presentationUnserialise,
            'description' => $descriptionUnserialise,
            'services' => $servicesUnserialise,
        ]);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $presentationSubmit = $form->get('presentation')->getData();
            $descriptionSubmit = $form->get('description')->getData();
            $servicesSubmit = $form->get('services')->getData();

            $presentation->setValue(json_decode($serializerInterface->serialize($presentationSubmit, 'json'), true));
            $description->setValue(json_decode($serializerInterface->serialize($descriptionSubmit, 'json'), true));
            $servicesDatas->setValue(json_decode($serializerInterface->serialize($servicesSubmit, 'json'), true));

            $entityManagerInterface->persist($presentation);
            $entityManagerInterface->persist($description);
            $entityManagerInterface->persist($servicesDatas);

            $entityManagerInterface->flush();

            $this->addFlash('success', ['toast', 'admin.template.success']);

            return $this->redirectToRoute('app_config_template_admin');
        }

        return $this->render('admin/template/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
