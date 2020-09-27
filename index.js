const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");

let employees = [];

// Basic Questions
const basicQuestions = [
  {
    type: "input",
    name: "name",
    message: `Please enter the employee's: name:`,
  },

  {
    type: "input",
    name: "id",
    message: `Please enter the employee's: id:`,
  },

  {
    type: "input",
    name: "email",
    message: `Please enter the employee's email:`,
  },
];

// Manager Questions
const managerQuestions = [
    ...basicQuestions,
    {
        type: 'input',
        name: 'officeNumber',
        message: `Please enter the office number:`,
    },
];

// Engineer Questions
const engineerQuestions = [
    ...basicQuestions,
    {
        type: 'input',
        name: 'github',
        message: `Please enter your GitHub username:`,
    },
];

// // Intern Questions
const internQuestions = [
    ...basicQuestions,
    {
        type: 'input',
        name: 'school',
        message: `Please enter your school's name:`,
    },
];

// Select employee role
const selectQuestions = [
    {
        name: "choice",
        type: "list",
        message: `Please select the job role:`,
        choices: ["Manager", "Engineer", "Intern", "None"],
    },
];

// refer to role functions
function employeeSelect() {
inquirer.prompt(selectQuestions).then((answers) => {
    if (answers.choice === "Manager") {
        managerInfo();
    }
    if (answers.choice === "Engineer") {
        engineerInfo();
    }
    if (answers.choice === "Intern") {
        internInfo();
    }
    if (answers.choice === "None") {
        createHTMLFile();
    }
});
}

employeeSelect();

// call manager questions and push to employees
function managerInfo() {
    inquirer.prompt(managerQuestions)
        .then((response) => {
            const newMan = new Manager(response.name, response.id, response.email, response.officeNumber);
            employees.push(newMan);
            employeeSelect();
        })
}

// call enginner questions and push to employees
function engineerInfo() {
    inquirer.prompt(engineerQuestions)
        .then((response) => {
            const newEng = new Engineer(response.name, response.id, response.email, response.github);
            employees.push(newEng);
            employeeSelect();
        })
}

// call enginner questions and push to employees
function internInfo() {
    inquirer.prompt(internQuestions)
        .then((response) => {
            const newInt = new Intern(response.name, response.id, response.email, response.school);
            employees.push(newInt);
            employeeSelect();
        })
}