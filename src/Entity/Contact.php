<?php

/**
 * Copyright (c) 2023. Tous droits réservés.
 * Aucun élément de ce site ne peut être reproduit sans permission écrite préalable.
 * Ce site, son contenu et tous les produits créés par JJA DEV sont protégés par les droits d'auteur.
 * Tous les droits sont réservés à JJA DEV.
 *
 * L'utilisation non autorisée de tout élément de ce site peut constituer une violation des lois applicables.
 * Cela peut entraîner des poursuites judiciaires.
 *
 * Pour utiliser du contenu de ce site, contactez JJA DEV.
 *
 * Merci de respecter notre travail créatif et nos droits de propriété intellectuelle.
 *
 * @category Entity
 *
 * @author   JJA-DEV
 * @license  JJA DEV © 2021 par Jeanniard Jonathan sous licence CC BY-NC-ND 4.0.
 * Pour voir une copie de cette licence, visitez https://creativecommons.org/licenses/by-nc-nd/4.0/
 *
 * @see     https://jja-dev.fr
 */

namespace App\Entity;

use App\Repository\ContactRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\HasLifecycleCallbacks]
#[ORM\Entity(repositoryClass: ContactRepository::class)]
class Contact
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[Assert\NotBlank]
    #[Assert\Length(min: 5, max: 25)]
    #[ORM\Column(length: 25)]
    private ?string $name = null;

    #[Assert\NotBlank]
    #[Assert\Email(message: 'contact.email.invalid')]
    #[ORM\Column(type: 'string', length: 255)]
    private ?string $email = null;

    #[Assert\NotBlank]
    #[Assert\Length(min: 10, max: 20)]
    #[ORM\Column(length: 20)]
    private ?string $phone = null;

    #[Assert\NotBlank]
    #[Assert\Length(min: 10, max: 50)]
    #[ORM\Column(length: 50)]
    private ?string $objet = null;

    #[Assert\NotBlank]
    #[Assert\Length(min: 20)]
    #[ORM\Column(type: 'text')]
    private ?string $sujet = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $Atdate = null;

    /**
     * @var Collection<int, ContactReply>
     */
    #[ORM\OneToMany(mappedBy: 'contact', targetEntity: ContactReply::class, orphanRemoval: true)]
    private Collection $contactReplies;

    public function __construct()
    {
        $this->contactReplies = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;

        return $this;
    }

    public function getPhone(): ?string
    {
        return $this->phone;
    }

    public function setPhone(string $phone): static
    {
        $this->phone = $phone;

        return $this;
    }

    public function getObjet(): ?string
    {
        return $this->objet;
    }

    public function setObjet(string $objet): static
    {
        $this->objet = $objet;

        return $this;
    }

    public function getSujet(): ?string
    {
        return $this->sujet;
    }

    public function setSujet(string $sujet): static
    {
        $this->sujet = $sujet;

        return $this;
    }

    public function getAtdate(): ?\DateTimeInterface
    {
        return $this->Atdate;
    }

    #[ORM\PrePersist]
    public function setAtdate(): void
    {
        $this->Atdate = new \DateTimeImmutable();
    }

    /**
     * @return Collection<int, ContactReply>
     */
    public function getContactReplies(): Collection
    {
        return $this->contactReplies;
    }

    public function addContactReply(ContactReply $contactReply): static
    {
        if (!$this->contactReplies->contains($contactReply)) {
            $this->contactReplies->add($contactReply);
            $contactReply->setContact($this);
        }

        return $this;
    }

    public function removeContactReply(ContactReply $contactReply): static
    {
        if ($this->contactReplies->removeElement($contactReply)) {
            // set the owning side to null (unless already changed)
            if ($contactReply->getContact() === $this) {
                $contactReply->setContact(null);
            }
        }

        return $this;
    }
}
