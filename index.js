// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
//const questions = [];

inquirer
  .prompt([
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
      choices: ["a", "b", "c", "d"],
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
  ])
  .then((answers) => {
    console.log(answers);
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
