// Variables and Dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);
//const { writeFile } = require('fs/promises');
const generateReadme = require('./generateReadme/generateReadme.js');
//const { assert } = require('console');
//Questions Array 
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
        "Apache_License_2.0",
        "GNU_General_Public_License_v3.0",
        "MIT_License",
        "BSD_2-Clause_'Simplified'_License",
        "BSD_3-Clause_'New'_or_'Revised'_License",

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
    return answers;
  }

  const generateAndWriteReadme = async (answers) => {
    const readme = generateReadme(answers);
    await writeFileAsync("OUTPUT.md" , readme);
  }


  const run = async () => {
    try {
        const answers = await getUserInput();
        await generateAndWriteReadme(answers);
        console.log('Success!');
        } catch (err) {
            console.error(err)
        }
  }

  run();
