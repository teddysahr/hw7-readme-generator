// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Provide a description of the project.",
    name: "description",
  },
  {
    type: "input",
    message: "Provide installation instructions.",
    name: "installation",
  },
  {
    type: "input",
    message: "Provide any usage information.",
    name: "usage",
  },
  {
    type: "input",
    message: "Provide contribution guidelines.",
    name: "contribution",
  },
  {
    type: "input",
    message: "Provide test instructions.",
    name: "test",
  },
  {
    type: "list",
    message: "Choose a license.",
    name: "license",
    choices: ["MIT", "GPL 3.0", "Apache 2.0", "BSD 3"],
  },
  {
    type: "input",
    message: "Enter your gitHub username.",
    name: "username",
  },
  {
    type: "input",
    message: "Enter your email.",
    name: "email",
  },
];

function init() {
  inquirer.prompt(questions).then((answers) => {
    fs.writeFile(
      "README.md",
      `# ${answers.title}
## Description
${answers.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [Test](#test)
- [License](#license)
- [Questions](#questions)
 ## Installation
${answers.installation}
## Usage
${answers.usage}
## Contributions
${answers.contribution}
## Test
${answers.test}
## License
${answers.license}
## Questions
- GitHub Account: github.com/${answers.username}
- email: ${answers.email}
      
      
        `,
      (err) =>
        err ? console.error(err) : console.log("Success! Generating README.md!")
    );
  });
}

init();
