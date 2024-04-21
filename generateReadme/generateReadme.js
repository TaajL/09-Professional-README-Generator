const generateReadme = (answers) => {
    const { title, description, installation, usage, contributing, tests, license, github, email } = answers;
  
    return `# ${title}
  ![License](https://img.shields.io/badge/License-${license}-blue.svg)
  ## Description
    ${description}
  
  ## Installation
    ${installation}
  
  ## Usage
    ${usage}
  
  ## Contributing
    ${contributing}
  
  ## Tests
    ${tests}
  
  ## License
    This project is licensed under the ${license} license.
  
  ## Contact
    If you have any questions, please contact me at ${github} or ${email}.`;
  }
  module.exports = generateReadme