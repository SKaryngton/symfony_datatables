<?php

namespace App\Controller;

use App\Entity\Employee;
use Doctrine\ORM\QueryBuilder;
use Omines\DataTablesBundle\Adapter\ArrayAdapter;
use Omines\DataTablesBundle\Adapter\Doctrine\ORMAdapter;
use Omines\DataTablesBundle\Column\BoolColumn;
use Omines\DataTablesBundle\Column\DateTimeColumn;
use Omines\DataTablesBundle\Column\TextColumn;
use Omines\DataTablesBundle\DataTable;
use Omines\DataTablesBundle\DataTableFactory;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DataWithoutEncoreController extends AbstractController
{



    #[Route('/test', name: 'app_test')]
    public function test(Request $request, DataTableFactory $dataTableFactory): Response
    {
         $data = [
            [
                "Name"=>"Tiger Nixon",
                "Job"=>"System Architect",
                "Town"=>"Edinburgh",
                "Ort"=>"5421",
                "Birthday"=>"2011/04/25",
                "Salary"=>"$3,120"
            ],
            [
                "Name"=>"Garrett Winters",
                "Job"=>"Director",
                "Town"=>"Edinburgh",
                "Ort"=>"8422",
                "Birthday"=>"2011/07/25",
                "Salary"=>"$5,300"
            ]
        ];

        $table = $dataTableFactory->create()
            ->add('Name', TextColumn::class)
            ->add('Job', TextColumn::class)
            ->add('Town', TextColumn::class)
            ->add('Ort', TextColumn::class)
            ->add('Birthday', TextColumn::class)
            ->add('Salary', TextColumn::class)
            ->addOrderBy('Salary',DataTable::SORT_DESCENDING)
            ->createAdapter(ArrayAdapter::class, $data)
            ->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getResponse();
        }



        return $this->render('home/index.html.twig', ['datatable' => $table]);
    }

    #[Route('/omine', name: 'app_data_without_encore')]
    public function index(Request $request, DataTableFactory $dataTableFactory): Response
    {

        $options = [
              'fixedHeader' => true,
//            'serverSide' => false,
              'processing' => true,
              'searching' => true,
              'searchDelay'=>350,
              'autoWidth' => true,
              'pageLength' => 10,//numbers of entries
              'paging' => true,
              'pagingType' => 'full_numbers',
              'lengthMenu' =>  [10, 25, 50, 100, 250, 500, 1000, 2500],
              'lengthChange'=>true,
              /*
               * numbers(only numbers)
               * simple(prev and next )
               * simple_numbers(prev numbers next(default))
               * full(first prev next last)
               * full_numbers(first prev numbers next last)
               * first_last_numbers(first  numbers  last)
               * */

               'dom'=> "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>>" .
                        "<'row'<'col-sm-12'tr>>" .
                        "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
              /* l:input(bsp:show 10 entries)
               * f:filter(searchbar)
               * t: table
               * r:table element
               * i: info (bsp:Showing 1 to 10 of 100 entries)
               * p:pagination
               */

               'order'=>[[0,'asc']],
               'ordering'=> true,



        ];
        $table = $dataTableFactory->create($options)
            ->add('id', TextColumn::class,[
                'label' => 'ID',
                'className' => 'bold',
                'visible'=>false
            ])
            ->add('firstname', TextColumn::class,[
                'label' => 'Firstname',
                'className' => 'bold',

            ])
            ->add('lastname', TextColumn::class,[
                'label' => 'Lastname',
                'className' => 'bold',
                'render' => '<strong>%s</strong>'
            ])
            ->add('position', TextColumn::class,[
                'label' => 'Job Title',
                'className' => 'bold'
            ])
            ->add('adresse', TextColumn::class,[
                'label' => 'Location',
                'className' => 'bold',
                'raw' => true
            ])
            ->add('birthday', DateTimeColumn::class,[
                'label' => 'Birthday',
                'className' => 'bold',
                'format' => 'd-m-Y'
            ])
            ->add('salary', TextColumn::class,[
                'label' => 'Salary',
                'className' => 'bold'
            ])
            ->add('company', TextColumn::class,[
                'field'=>'company.name',
                'label' => 'Company',
                'className' => 'bold'
            ])
            ->add('wantsNewletter', BoolColumn::class,[
                'label' => 'Newletter',
                'className' => 'bold',
                'trueValue' => 'yes',
                'falseValue' => 'no',
                'nullValue' => 'unknown',
            ])
            ->add('email', TextColumn::class,[
                'label' => 'Email',
                'className' => 'bold',
                'render'=>function($value,$context){
                return sprintf('<a href="%s">%s</a>',$value,$value);
                }
            ])
           // ->addOrderBy('salary',DataTable::SORT_DESCENDING)
            ->createAdapter(ORMAdapter::class, [
                'entity'=> Employee::class


            ])
            ->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getResponse();
        }



        return $this->render('home/index.html.twig', ['datatable' => $table]);
    }
}
