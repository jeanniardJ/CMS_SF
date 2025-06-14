# CMS SF Instructions

## Project Scope
- CMS SF is a custom Content Management System built on Symfony 6.4.
- It provides a secure authentication system and a clear separation between back office (administration) and front office (public site).

## Project Features
- The CMS SF must include:
    - A login system for user authentication.
    - A back office for managing content, users, and site settings.
    - A front office for displaying published content to visitors.
    - Modular architecture for adding new features.
    - Security based on Symfony components (firewall, roles, etc.).

## Coding Standards
- Follow PSR-4 and PSR-12 coding standards.
- Use type hints and return types in all PHP functions and methods.
- Declare `declare(strict_types=1);` at the top of each PHP file.
- Use namespaces to organize code.
- Use meaningful variable and function names.
- Avoid global variables.
- Maintain a consistent coding style.
- Use a linter and code formatter to ensure code quality.

## Development Standards
- Develop at an expert level.
- Use established design patterns such as MVC and CRUD.
- Place custom bundles in `src/`.
- Prefix back office routes with `/admin`.
- Follow Symfony conventions for controllers, entities, and views.

## Testing
- Write unit tests for all new features and bug fixes using PHPUnit.
- Write integration tests to ensure proper system functionality.
- Add performance tests for critical features.

## Static Analysis
- Use PHPStan for static analysis to ensure code quality and standards compliance.

## Documentation
- Document all public classes and methods using PHPDoc.
- Maintain a README with installation, usage, and contribution guidelines.
- Keep a CHANGELOG for version changes.
- Include a LICENSE file for the project.

## Dependency Management
- Use Composer for dependency management.
- Keep dependencies up to date and follow semantic versioning.

## Compatibility
- Ensure compatibility with PHP 8.1 or higher.

## Version Control
- Use Git for version control and follow a branching strategy (e.g., Git Flow).
- Write clear, concise commit messages.
- Use the GitHub Kanban board to manage tasks and track progress.
- All features must be validated and reviewed before merging.

## Security
- Perform regular security audits.
- Validate user inputs to prevent vulnerabilities (SQL injection, XSS, etc.).
- Restrict back office access to authenticated users with appropriate roles.

## Performance
- Optimize performance for critical features.
- Use database indexing where necessary.

## CI/CD
- Set up a CI/CD pipeline with GitHub Actions for automated testing and deployment.

## Error Handling
- Use exceptions for error handling.
- Centralize error handling and logging.

## Accessibility
- Ensure compliance with accessibility standards (e.g., WCAG).

## Development Environment
- Use Docker for the development environment to ensure consistency.

## Design Patterns
- Follow and document design patterns used (e.g., Factory, Singleton, Repository).

## Architecture
- Follow the MVC architecture and object-oriented principles.

## Framework
- The project is based on Symfony 6.4.

## Database
- Use MySQL as the database.

## Kanban Board
- The Kanban board consists of 5 columns:
    1. **Backlog**: All tasks and features to be implemented.
    2. **Ready**: Tasks ready to be picked up.
    3. **In Progress**: Tasks currently being worked on.
    4. **In Review**: Tasks awaiting review.
    5. **Done**: Completed tasks.