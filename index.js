// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';


// TODO: Create an array of questions for user input
const questions = [
  { type: 'input', name: 'title', message: 'What is the title of your project?' },
  { type: 'input', name: 'description', message: 'Please provide a description of your project.' },
  { type: 'input', name: 'installation', message: 'Please provide installation instructions for your project.' },
  { type: 'input', name: 'usage', message: 'Please provide usage information for your project.' },
  { type: 'input', name: 'contributing', message: 'Please provide contribution guidelines for your project.' },
  { type: 'input', name: 'tests', message: 'Please provide test instructions for your project.' },
  { type: 'list', name: 'license', message: 'Please choose a license for your project.', choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'] },
  { type: 'input', name: 'github', message: 'What is your GitHub username?' },
  { type: 'input', name: 'email', message: 'What is your email address?' },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Your README.md file hass been created!');
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile('README.md', generateMarkdown(answers));
  });
}

// Function call to initialize app
init();
