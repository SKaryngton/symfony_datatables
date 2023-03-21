<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\EmployeeRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ApiResource(
    formats: ["json","jsonld","csv","html"],
    normalizationContext: [
        'groups'=>['employee:read']
    ],
    denormalizationContext: [
        'groups'=>['employee:write']
    ],
)]
#[ORM\Entity(repositoryClass: EmployeeRepository::class)]
class Employee
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups('employee:read')]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups('employee:read')]
    private ?string $firstname = null;

    #[Groups('employee:read')]
    #[ORM\Column(length: 255)]
    private ?string $lastname = null;

    #[Groups('employee:read')]
    #[ORM\Column(length: 255)]
    private ?string $position = null;

    #[Groups('employee:read')]
    #[ORM\Column(length: 255)]
    private ?string $adresse = null;

    #[Groups('employee:read')]
    #[ORM\Column]
    private ?\DateTimeImmutable $birthday = null;

    #[Groups('employee:read')]
    #[ORM\Column]
    private ?int $salary = null;

    #[Groups('employee:read')]
    #[ORM\ManyToOne(inversedBy: 'employees')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Company $company = null;

    #[Groups('employee:read')]
    #[ORM\Column(nullable: true)]
    private ?bool $wantsNewletter = null;

    #[Groups('employee:read')]
    #[ORM\Column(length: 255)]
    private ?string $email = null;



    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    public function setFirstname(string $firstname): self
    {
        $this->firstname = $firstname;

        return $this;
    }

    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    public function setLastname(string $lastname): self
    {
        $this->lastname = $lastname;

        return $this;
    }

    public function getPosition(): ?string
    {
        return $this->position;
    }

    public function setPosition(string $position): self
    {
        $this->position = $position;

        return $this;
    }

    public function getAdresse(): ?string
    {
        return $this->adresse;
    }

    public function setAdresse(string $adresse): self
    {
        $this->adresse = $adresse;

        return $this;
    }

    public function getBirthday(): ?\DateTimeImmutable
    {
        return $this->birthday;
    }

    public function setBirthday(\DateTimeImmutable $birthday): self
    {
        $this->birthday = $birthday;

        return $this;
    }

    public function getSalary(): ?float
    {
        return $this->salary;
    }

    public function setSalary(float $salary): self
    {
        $this->salary = $salary;

        return $this;
    }

    public function getCompany(): ?Company
    {
        return $this->company;
    }

    public function setCompany(?Company $company): self
    {
        $this->company = $company;

        return $this;
    }

    public function isWantsNewletter(): ?bool
    {
        return $this->wantsNewletter;
    }

    public function setWantsNewletter(?bool $wantsNewletter): self
    {
        $this->wantsNewletter = $wantsNewletter;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }


}
