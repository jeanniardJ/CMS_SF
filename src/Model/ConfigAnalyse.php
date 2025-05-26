<?php

/**
 * @category Model
 *
 * @author   JJA-DEV
 * @license  JJA DEV © 2021 par Jeanniard Jonathan sous licence MIT.
 * Pour voir une copie de cette licence, visitez https://opensource.org/licenses/MIT
 *
 * @see     https://jja-dev.fr
 */

namespace App\Model;

use Symfony\Component\Validator\Constraints as Assert;

/**
 * Classe ConfigAnalyse.
 *
 * @catégorie Model
 *
 * @paquet  App\Model
 *
 * @auteur   JJA-DEV
 *
 * @licence  JJA DEV © 2021 par Jeanniard Jonathan sous licence MIT.
 * Pour consulter une copie de cette licence, visitez https://opensource.org/licenses/MIT
 *
 * @lien     https://jja-dev.fr
 */
class ConfigAnalyse
{
    #[Assert\Length(max: 20, maxMessage: 'Le code Google Analytics ne doit pas dépasser {{ limit }} caractères.')]
    #[Assert\Regex(
        pattern: '/^(UA-\d{6,})$/', // exemple: UA-123456789
        message: 'Le code Google Analytics doit être au format UA-123456789.'
    )]
    private ?string $analyseGoogle = null;

    #[Assert\Length(max: 20, maxMessage: 'Le code Facebook Pixel ne doit pas dépasser {{ limit }} caractères.')]
    private ?string $analyseFacebook = null;

    private ?string $analyseInstagram = null;

    private ?string $analyseLinkedin = null;

    private ?string $analyseYoutube = null;

    private ?string $analyseWhatsapp = null;

    public function getAnalyseGoogle(): ?string
    {
        return $this->analyseGoogle;
    }

    public function setAnalyseGoogle(?string $analyseGoogle): void
    {
        $this->analyseGoogle = $analyseGoogle;
    }

    public function getAnalyseFacebook(): ?string
    {
        return $this->analyseFacebook;
    }

    public function setAnalyseFacebook(?string $analyseFacebook): void
    {
        $this->analyseFacebook = $analyseFacebook;
    }

    public function getAnalyseInstagram(): ?string
    {
        return $this->analyseInstagram;
    }

    public function setAnalyseInstagram(?string $analyseInstagram): void
    {
        $this->analyseInstagram = $analyseInstagram;
    }

    public function getAnalyseLinkedin(): ?string
    {
        return $this->analyseLinkedin;
    }

    public function setAnalyseLinkedin(?string $analyseLinkedin): void
    {
        $this->analyseLinkedin = $analyseLinkedin;
    }

    public function getAnalyseYoutube(): ?string
    {
        return $this->analyseYoutube;
    }

    public function setAnalyseYoutube(?string $analyseYoutube): void
    {
        $this->analyseYoutube = $analyseYoutube;
    }

    public function getAnalyseWhatsapp(): ?string
    {
        return $this->analyseWhatsapp;
    }

    public function setAnalyseWhatsapp(?string $analyseWhatsapp): void
    {
        $this->analyseWhatsapp = $analyseWhatsapp;
    }
}
