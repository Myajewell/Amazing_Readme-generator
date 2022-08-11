// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { type } = require('os');
const generateMarkdown = require('./utils/generateMarkdown');

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
    name: 'description',
    message: 'Describe your project.',
},
{
    type: 'input',
    name: 'installation',
    message: 'What are the installation instruction for your application?',
},
{
    type: 'input',
    name: 'usage',
    message: 'Are there any specific instructions on how to use the application?',
},
{
    type: 'list',
    name: 'license',
    message: 'Select your license',
    choices: ['Apache 2.0', 'Eclipse 1.0', 'IBM 1.0','MIT','none'],
},
{
    type: 'input',
    name: 'contribution',
    message: 'Who contributed to your project?',
},
{
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?',
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
},
]).then((anwers)=> {
    const readmePageContent = generateMarkdown(anwers);

    fs.writeFile('readme.md', readmePageContent, (err) =>
    err ? console.log(err) : console.log('successfully created Readme.md!')
    );
});

// TODO: Create a function to write README file
function writeToFile('README', data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
