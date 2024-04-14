const inquirer = require('inquirer');
const fs = require('fs');
const { writeFile } = require('fs/promises');
const generateReadme = ('')
const writeFile =

const questions = [
    {
      type: "input",
      name: "title",
      message: "What is your project title?",
    },
    {
      type: "input",
      name: "description",
      message: "Provide a description of your project:",
    },
    {
      type: "input",
      name: "installation",
      message: "Describe the installation process:",
    },
    {
      type: "input",
      name: "usage",
      message: "Provide instructions for using your project:",
    },
    {
      type: "input",
      name: "contributing",
      message: "Provide guidelines for contributing to your project:",
    },
    {
      type: "input",
      name: "tests",
      message: "Describe how to run tests for your project:",
    },
    {
      type: "list",
      name: "license",
      message: "Choose a license for your project:",
      choices: [
        "Apache License 2.0",
        "GNU General Public License v3.0",
        "MIT License",
        "BSD 2-Clause 'Simplified' License",
        "BSD 3-Clause 'New' or 'Revised' License",
        "Boost Software License 1.0",
        "Creative Commons Zero v1.0 Universal",
        "Eclipse Public License 2.0",
        "GNU Affero General Public License v3.0",
        "GNU General Public License v2.0",
        "GNU Lesser General Public License v2.1",
        "Mozilla Public License 2.0",
        "The Unlicense",
      ],
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub username:",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email address:",
    },
  ];

  async function getUserInput () {
    const answers = await inquirer.prompt(questions);
    return generateReadme(answers);
  }

  async function writeToFile(readme) {
    try{
        await writeFileAsync("README.md" , readme);
        console.log("Success!");
    } catch(err){
        console.log(err)
    }
  }