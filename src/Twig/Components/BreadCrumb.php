<?php

namespace App\Twig\Components;

use Symfony\UX\TwigComponent\Attribute\AsTwigComponent;

#[AsTwigComponent(template: 'admin/components/breadCrumb.html.twig')]
class BreadCrumb
{
    /**
     * @var array<int, array{name: string, url: ?string}>
     */
    public array $breadCrumbs = [];

    /**
     * Add an item to the breadcrumb.
     *
     * @param string $name The name of the breadcrumb item.
     * @param string|null $url The URL of the breadcrumb item, or null if it has no URL.
     *
     * @return array{name: string, url: ?string} The added breadcrumb item.
     */
    public function addItem(string $name, ?string $url = null): array
    {
        return $this->breadCrumbs[] = ['name' => $name, 'url' => $url];
    }

    /**
     * Get all breadcrumb items.
     *
     * @return array<int, array{name: string, url: ?string}> The list of breadcrumb items.
     */
    public function getItems(): array
    {
        return $this->breadCrumbs;
    }
}
