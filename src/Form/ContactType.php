<?php

/**
 * @category Form
 *
 * @author   JJA-DEV
 * @license  JJA DEV © 2021 par Jeanniard Jonathan sous licence MIT.
 * Pour voir une copie de cette licence, visitez https://opensource.org/licenses/MIT
 *
 * @see     https://jja-dev.fr
 */

namespace App\Form;

use App\Entity\Contact;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TelType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ContactType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', TextType::class, [
                'attr' => ['placeholder' => 'contact.placeholder.name'],
            ])
            ->add('email', EmailType::class, [
                'attr' => ['placeholder' => 'contact.placeholder.email'],
            ])
            ->add('phone', TelType::class, [
                'label' => 'contact.numberPhone',
                'attr' => [
                    'placeholder' => 'contact.placeholder.phone',
                    'pattern' => '0[1-9][0-9]{8}',
                ],
            ])
            ->add('objet', TextType::class)
            ->add('sujet', TextareaType::class);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Contact::class,
            'translation_domain' => 'contact',
        ]);
    }
}
