# Angular Project

This is an Angular project developed for 6crickets. This README provides instructions on how to set up and run the project locally, as well as how to run tests using the Angular CLI.

## Question asked by 6crickets
There is an API endpoint called /api/deadline which returns { secondsLeft: number } JSON object containing the number of seconds left to some constant deadline date (deadline date never changes). Write an Angular component (and any other Angular classes/functions if needed) that will retrieve data from backend and will display “Seconds left to deadline: X” countdown timer (X should be updated every second). Please take your time to write performance optimized code that could be then copy-pasted into some bigger Angular project.

## Overview of solution
The component being built is called `countdown` found in `src/app/countdown/`

The way it works is that it calls a service on intialization that in a real world scenario would GET a response from the api to return seconds to deadline value. I have set a random number to simulate that.

Once that number is retrieved by the component, it will decrease the value every second using the `setInterval` function provided by angular.

Similarly when the component is destroyed it cleans up the interval to avoid any memory leaks.

The idea was to avoid calling the api too often for performance reasons. There is no reason that we should be calling the api every second as the calculation can be done on the front end and this will be far more efficient and less resournce intensive.

## Scaffolding

This skeleton project was copied from angular's website here https://angular.dev/tutorials/first-app/01-hello-world

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js and npm installed. You can download them from [Node.js official website](https://nodejs.org/).
- Angular CLI installed globally. You can install it using the following command:
    ```bash
    npm install -g @angular/cli
    ```

## Getting Started

Follow these steps to set up and run the project locally:

1. **Clone the repository:**
     ```bash
     git clone https://github.com/safdarzeeshan/angular-project.git
     cd angular-project
     ```

2. **Install dependencies:**
     ```bash
     npm install
     ```

3. **Run the application:**
     ```bash
     ng serve
     ```
     The application will be available at `http://localhost:4200/`.

## Running Tests

To run tests using the Angular CLI, use the following command:
```bash
ng test
```
This will execute the unit tests and provide a report of the test results.

## Additional Commands

- **Build the project:**
    ```bash
    ng build
    ```
    This will build the project and output the compiled files to the `dist/` directory.

- **Lint the project:**
    ```bash
    ng lint
    ```
    This will run the linter and provide a report of any linting issues.

## Contributing

If you would like to contribute to this project, please fork the repository and create a pull request. We welcome all contributions.

## License

This project is licensed under the [MIT License](LICENSE).