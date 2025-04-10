<?php

namespace App\Form;

use App\Entity\ContactReply;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

class ContactReplyType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('objet')
            ->add('message', TextareaType::class, [
                'label' => 'admin.contact.reply.message',
                'attr' => ['rows' => 10]
            ])
            ->add('submit', SubmitType::class, [
                'label' => 'admin.contact.send.reply',
                'attr' => ['class' => 'btn btn-primary']
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => ContactReply::class,
            'translation_domain' => 'contact',
        ]);
    }
}
