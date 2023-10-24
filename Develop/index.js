// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    'Enter your GitHub username:',
    'Enter your email address:',
    'Enter your project title:',
    'Enter a description of your project:',
    'Enter installation instructions:',
    'Enter usage information:',
    'Enter contribution guidelines:',
    'Enter test instructions:',
    'Choose a license:',
];

function promptUser() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: questions[0],
        },
        {
            type: 'input',
            name: 'email',
            message: questions[1],
        },
        {
            type: 'input',
            name: 'title',
            message: questions[2],
        },
        {
            type: 'input',
            name: 'description',
            message: questions[3],
        },
        {
            type: 'input',
            name: 'installation',
            message: questions[4],
        },
        {
            type: 'input',
            name: 'usage',
            message: questions[5],
        },
        {
            type: 'input',
            name: 'contribution',
            message: questions[6],
        },
        {
            type: 'input',
            name: 'test',
            message: questions[7],
        },
        {
            type: 'checkbox',
            name: 'license',
            message: questions[8],
            choices: ['Apache', 'GNU', 'MIT', 'BSD', 'Mozilla', 'None'],
        },
    ])
    .then((response) =>{
        writeToFile(generate(response));
    });
}

// TODO: Create a function to write README file
function writeToFile(fileName) {
    fs.writeFile('README.md', fileName, (err) =>
    err? console.log(err) : console.log('Successfully created README.md!')
    );
}

// TODO: Create a function to initialize app
function init() {
    promptUser();
}

// Function call to initialize app
init();
