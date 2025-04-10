# CMS SF - README

Welcome to the CMS SF repository by JJA DEV!

## Installation

To install CMS_SF, follow these steps:

1. Clone the repository to your local machine:

    ```
    git clone https://github.com/JJA-DEV/CMS_SF.git
    ```

2. Install the necessary dependencies:

    ```
    composer install
    ```

3. Configure the database connection:

    - Open the `.env` file and set the `DATABASE_URL` parameter with your database credentials.

4. Create the database:

    ```
    php bin/console doctrine:database:create
    ```

5. Run the database migrations:

    ```
    php bin/console doctrine:migrations:migrate
    ```

6. Start the development server:

    ```
    symfony serve
    ```

7. Access the CMS_SF admin panel by visiting `http://localhost:8000/admin`.

## Features

CMS_SF, based on Symfony 6, offers the following features:

-   **Easy Setup**: CMS_SF provides a simple installation process, allowing developers to quickly get started with their projects.
-   **Customizable Templates**: Developers can create and modify templates to match their specific design requirements.
-   **Content Management**: CMS_SF offers a user-friendly interface for managing website content, including pages, posts, and media files.
-   **User Authentication**: Built-in user authentication system allows developers to secure their websites and control access to certain areas.
-   **Plugin Support**: Developers can extend the functionality of CMS_SF by adding custom plugins or utilizing existing ones.

## Documentation

For more detailed instructions and documentation, please refer to the [CMS_SF Wiki](https://github.com/JJA-DEV/CMS_SF/wiki).

## Dependencies

To use CMS_SF, you will need to have the following dependencies installed:

-   **PHP**: Version 8.2 or higher
-   **ext-ctype**: Required for character type checking
-   **ext-iconv**: Required for character encoding conversion
-   **doctrine/doctrine-bundle**: Version 2.10 or higher
-   **doctrine/doctrine-migrations-bundle**: Version 3.2 or higher
-   **doctrine/orm**: Version 2.19 or higher
-   **elao/consent-bundle**: Latest development version
-   **gedmo/doctrine-extensions**: Version 3.13 or higher
-   **guzzlehttp/guzzle**: Version 7.8 or higher
-   **guzzlehttp/psr7**: Version 2.6 or higher
-   **knplabs/doctrine-behaviors**: Version 2.6 or higher
-   **knplabs/github-api**: Version 3.14 or higher
-   **knplabs/knp-menu-bundle**: Version 3.2 or higher
-   **knpuniversity/oauth2-client-bundle**: Version 2.15 or higher
-   **league/oauth2-github**: Version 3.1 or higher
-   **league/oauth2-linkedin**: Version 5.1 or higher
-   **liip/imagine-bundle**: Version 2.12 or higher
-   **mlocati/ip-lib**: Version 1.18 or higher
-   **nelmio/cors-bundle**: Version 2.4 or higher
-   **nelmio/security-bundle**: Version 3.4 or higher
-   **openai-php/client**: Version 0.3.5 or higher
-   **php-http/curl-client**: Version 2.3 or higher
-   **php-http/message**: Version 1.16 or higher
-   **phpdocumentor/reflection-docblock**: Version 5.3 or higher
-   **phpstan/phpdoc-parser**: Version 1.24 or higher
-   **presta/sitemap-bundle**: Version 3.3 or higher
-   **stof/doctrine-extensions-bundle**: Version 1.8 or higher
-   **symfony-cmf/routing**: Version 3.0 or higher
-   **symfony-cmf/routing-bundle**: Version 3.0 or higher
-   **symfony/asset**: Version 6.4._ or 7.0._
-   **symfony/console**: Version 6.4._ or 7.0._
-   **symfony/doctrine-messenger**: Version 6.4._ or 7.0._
-   **symfony/dotenv**: Version 6.4._ or 7.0._
-   **symfony/expression-language**: Version 6.4._ or 7.0._
-   **symfony/flex**: Version 2 or higher
-   **symfony/form**: Version 6.4._ or 7.0._
-   **symfony/framework-bundle**: Version 6.4._ or 7.0._
-   **symfony/http-client**: Version 6.4._ or 7.0._
-   **symfony/http-foundation**: Version 6.4._ or 7.0._
-   **symfony/intl**: Version 6.4._ or 7.0._
-   **symfony/mailer**: Version 6.4._ or 7.0._
-   **symfony/messenger**: Version 6.4._ or 7.0._
-   **symfony/mime**: Version 6.4._ or 7.0._
-   **symfony/monolog-bundle**: Version 3.0 or higher
-   **symfony/notifier**: Version 6.4._ or 7.0._
-   **symfony/process**: Version 6.4._ or 7.0._
-   **symfony/property-access**: Version 6.4._ or 7.0._
-   **symfony/property-info**: Version 6.4._ or 7.0._
-   **symfony/requirements-checker**: Version 2.0 or higher
-   **symfony/runtime**: Version 6.4.\*
-   **symfony/security-bundle**: Version 6.4._ or 7.0._
-   **symfony/security-csrf**: Version 6.4._ or 7.0._
-   **symfony/serializer**: Version 6.4._ or 7.0._
-   **symfony/stimulus-bundle**: Version 2.12 or higher
-   **symfony/string**: Version 6.4._ or 7.0._
-   **symfony/translation**: Version 6.4.\*
-   **symfony/twig-bundle**: Version 6.4._ or 7.0._
-   **symfony/ux-autocomplete**: Version 2.12 or higher
-   **symfony/ux-chartjs**: Version 2.14 or higher
-   **symfony/ux-live-component**: Version 2.13 or higher
-   **symfony/ux-react**: Version 2.12 or higher
-   **symfony/ux-twig-component**: Version 2.12 or higher
-   **symfony/ux-typed**: Version 2.12 or higher
-   **symfony/validator**: Version 6.4._ or 7.0._
-   **symfony/web-link**: Version 6.4._ or 7.0._
-   **symfony/webpack-encore-bundle**: Version 2.1 or higher
-   **symfony/yaml**: Version 6.4._ or 7.0._
-   **symfonycasts/reset-password-bundle**: Version 1.18 or higher
-   **symfonycasts/verify-email-bundle**: Version 1.14 or higher
-   **twig/cssinliner-extra**: Version 3.7 or higher
-   **twig/extra-bundle**: Version 3.7 or higher
-   **twig/inky-extra**: Version 3.7 or higher
-   **twig/string-extra**: Version 3.7 or higher
-   **twig/twig**: Version 2.12 or 3.0
-   **vich/uploader-bundle**: Version 2.3 or higher

Make sure to include these dependencies in your `composer.json` file before running `composer install`.

For more information on each dependency, please refer to the official documentation of each package.
