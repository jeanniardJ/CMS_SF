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

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class LegalnoticeController extends AbstractController
{
    #[Route(
        '/legalnotice',
        name: 'app_legalnotice_index',
        options: ['sitemap' => ['priority' => 0.7]]
    )]
    public function index(): Response
    {
        return $this->render('legalnotice/index.html.twig', [
            'controller_name' => 'LegalnoticeController',
        ]);
    }
}
