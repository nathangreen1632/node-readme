import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';

const questions = [
  { type: "input", name: "title", message: "Project title:" },
  { type: "input", name: "description", message: "Provide a brief overview of the project:" },
  { type: "input", name: "features", message: "List the main features of this project:" },
  { type: "input", name: "techStack", message: "What technologies were used? (Comma-separated list)" },
  { type: "input", name: "projectStructure", message: "Provide a sample project structure:" },
  { type: "input", name: "documentationLink", message: "Provide a link to documentation:" },
  { type: "input", name: "installation", message: "Installation steps:" },
  { type: "input", name: "usage", message: "Usage instructions:" },
  { type: "input", name: "videoWalkthrough", message: "Provide a link to a video walkthrough:" },
  { type: "input", name: "futureEnhancements", message: "List planned future enhancements (Comma-separated list)" },
  { type: "input", name: "license", message: "Choose a license (MIT, Apache 2.0, GPL 3.0, BSD 3, None):" },
  { type: "input", name: "contributing", message: "How can others contribute?" },
  { type: "input", name: "tests", message: "Provide test instructions:" },
  { type: "input", name: "github", message: "Enter your GitHub username:" }
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Your README.md file has been created!');
    }
  });
}

function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile("README.md", generateMarkdown(answers));
    answers.features = answers.features.split(",").map((item) => item.trim());
    answers.techStack = answers.techStack.split(",").map((item) => item.trim());
    answers.futureEnhancements = answers.futureEnhancements.split(",").map((item) => item.trim());
    answers.projectStructure = answers.projectStructure.split(",").map((item) => item.trim());
    answers.installation = answers.installation.split(",").map((item) => item.trim());
    answers.usage = answers.usage.split(",").map((item) => item.trim());
    answers.tests = answers.tests.split(",").map((item) => item.trim());
    answers.contributing = answers.contributing.split(",").map((item) => item.trim());
    answers.documentationLink = answers.documentationLink.split(",").map((item) => item.trim());
    answers.license = answers.license.split(",").map((item) => item.trim());
    answers.github = answers.github.split(",").map((item) => item.trim());
    answers.videoWalkthrough = answers.videoWalkthrough.trim();
  }
);}

init();
