# demo 
https://my-gate-test.herokuapp.com/#/

# clone

# navigate to the project folder
run --> npm install

# Gate

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

ng build --prod --aot   

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



# navigate to the project folder
run --> npm install

# AngularTourOfHeroes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Command

ng generate component components/login --skipTests=true
ng generate module components/login

ng generate component components/dashboard --skipTests=true
ng generate module components/dashboard

ng generate component components/side-bar --skipTests=true
ng generate module components/side-bar

ng generate component components/landing --skipTests=true
ng generate module components/landing

ng generate component components/header --skipTests=true
ng generate module components/header

ng generate module components/footer
ng generate component components/footer --skipTests=true

### income
ng generate module components/income
ng generate component components/income --skipTests=true
ng generate component components/income/income-list --skipTests=true
ng generate component components/income/income-add --skipTests=true

### expense
ng generate module components/expense
ng generate component components/expense --skipTests=true
ng generate component components/expense/expense-list --skipTests=true
ng generate component components/expense/expense-add --skipTests=true

## society
ng generate module components/society
ng generate component components/society --skipTests=true
ng generate component components/society/society-list --skipTests=true
ng generate component components/society/society-add --skipTests=true

#### residents
ng generate module components/residents
ng generate component components/residents --skipTests=true
ng generate component components/residents/resident-list --skipTests=true
ng generate component components/residents/resident-add --skipTests=true
ng generate component components/residents/summary-resident --skipTests=true

#### category
ng generate module components/category
ng generate component components/category --skipTests=true
ng generate component components/category/category-list --skipTests=true
ng generate component components/category/category-add --skipTests=true

#### users
ng generate module components/users
ng generate component components/users --skipTests=true
ng generate component components/users/user-list --skipTests=true
ng generate component components/users/user-add --skipTests=true


### maintenance
ng generate module components/maintenance
ng generate component components/maintenance --skipTests=true

ng generate module components/assests
ng generate component components/assests --skipTests=true

ng generate module components/ledgerAccounts
ng generate component components/ledgerAccounts --skipTests=true

ng generate module components/complaints
ng generate component components/complaints --skipTests=true

ng generate module components/visitors
ng generate component components/visitors --skipTests=true

ng generate component components/spinner --skipTests=true
ng generate component components/page-not-found --skipTests=true
ng generate component components/common-error-modal --skipTests=true

ng generate module components/logout
ng generate component components/logout --skipTests=true




### services
ng generate service services/resident --skipTests=true
ng generate service services/toastr --skipTests=true
ng generate service services/auth --skipTests=true
ng generate service services/logging --skipTests=true
ng generate service services/clone --skipTests=true
ng generate service services/income --skipTests=true
ng generate service services/expense --skipTests=true
ng generate service services/society --skipTests=true
ng generate service services/category --skipTests=true
ng generate service services/user --skipTests=true


### npm packages
npm install --save bootstrap
npm install --save jquery
npm install toastr
npm install clone
npm install @type/clone
npm install http-server
npm install memo   -> not using as of now
npm install moment --save
## if complex cloning is needed.. then use this.
npm install immutable

#### pipes
ng generate pipe pipes/add-tax --skipTests=true


### base components
ng generate component components/base-components/base --skipTests=true


### guard
 ng generate guard common/auth     
