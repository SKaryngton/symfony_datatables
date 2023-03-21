<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ApiDatatableController extends AbstractController
{
    #[Route('/api_dt', name: 'app_api_datatable')]
    public function index(): Response
    {
        return $this->render('api_datatable/index.html.twig');
    }

    #[Route('/responsive', name: 'app_responsive')]
    public function responsive(): Response
    {
        return $this->render('responsive/index.html.twig');
    }
}
