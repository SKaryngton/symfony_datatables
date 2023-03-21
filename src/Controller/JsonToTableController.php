<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class JsonToTableController extends AbstractController
{
    #[Route('/json_table', name: 'app_json_table')]
    public function index(): Response
    {
        return $this->render('json_table/index.html.twig');
    }
}
