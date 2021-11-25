# TaskManager

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## The Task

Task manager:

- Login
- Hardcoded list of users Admin x1, Simple users x4
- Sidebar with list of projects (simple list with icon and title), by clicking on project board should be opened, where user can see list of tasks
- Navbar should display information of logged in user, clicking on info user should have an option to edit information or logouts
- Edit user information page, should include name, email, password with confirmation (two fields with comparing of match)
- As a user avatar should be used initials of name, example: First User - FU, First - Fi
- On sidebar should be an option to create new project on separate page
- New project/ edit project page should contain: title, description, icon selector (can be used from ant or whatever, simple list of 10-30 icons), list of users added to project
- On a board there should be an option to create new tasks, it can be opened in modal window
- Create/edit task should contain: title, description, list of assigned users
- Description should be html input (see at nix-quill library)
- When user login, he should see on sidebar list of added by him projects, or projects where he was invited.
- When invited user open project, he cannot create new tasks, only review it
- Admin can create new users, review all projects, edit them or delete
