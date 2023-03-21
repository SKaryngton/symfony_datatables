<?php

namespace App\DataFixtures;

use App\Entity\Employee;
use App\Factory\CompanyFactory;
use App\Factory\EmployeeFactory;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        CompanyFactory::createMany(20);
        EmployeeFactory::createMany(70);
        EmployeeFactory::new()->undecided()->many(30)->create();

        $manager->flush();
    }
}
