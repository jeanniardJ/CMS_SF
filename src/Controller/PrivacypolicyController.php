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

use Presta\SitemapBundle\Sitemap\Url\UrlConcrete;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PrivacypolicyController extends AbstractController
{
    #[Route(
        '/privatepolicy',
        name: 'app_privacypolicy_index',
        options: ['sitemap' => ['priority' => 0.7, 'changefreq' => UrlConcrete::CHANGEFREQ_WEEKLY]]
    )]
    public function index(): Response
    {
        return $this->render('privatepolicy/index.html.twig', [
            'controller_name' => 'PrivatepolicyController',
        ]);
    }
}
