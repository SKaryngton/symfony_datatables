<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DataEncoreController extends AbstractController
{
    #[Route('/', name: 'app_data_encore')]
    public function index(): Response
    {
        return $this->render('data/index.html.twig');
    }


}
