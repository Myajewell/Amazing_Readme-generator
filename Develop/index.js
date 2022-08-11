// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { type } = require('os');
// TODO: Create an array of questions for user input
// creating inquirer prompts to generate questions.
inquirer
.prompt ([
{
    type: 'input',
    name: 'Title',
    message: 'What is your project title?',
},
{
    type: 'input',
    name: 'Description',
    message: 'Describe your project.',
},
{
    type: 'input',
    name: 'Installation',
    message: 'What are the installation instruction for your application?',
},
{
    type: 'input',
    name: 'Usage',
    message: 'Are there any specific instructions on how to use the application?',
},
{
    type: 'list',
    name: 'License',
    message: 'Select your license',
    choices: ['Apache 2.0', 'Eclipse 1.0', 'IBM 1.0','MIT','none'],
},
{
    type: 'input',
    name: 'Contributors',
    message: 'Who contributed to your project?',
},
{
    type: 'input',
    name: 'Username',
    message: 'What is your GitHub username?',
},
{
    type: 'input',
    name: 'Email',
    message: 'What is your email address?',
},
])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
