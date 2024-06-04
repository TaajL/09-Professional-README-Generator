const generateReadme = (answers) => {
    const { title, description, installation, usage, contributing, tests, license, github, email } = answers;
  
    return `# ${title}
  ![License](https://img.shields.io/badge/License-${license}-blue.svg)

  ## Table of Contents
  * [Description](https://github.com/TaajL/09-Professional-README-Generator/blob/main/OUTPUT.md#description)
  * [Installation Instructions](https://github.com/TaajL/09-Professional-README-Generator/blob/main/OUTPUT.md#installation)
  * [Usage](https://github.com/TaajL/09-Professional-README-Generator/blob/main/OUTPUT.md/#usage)
  * [License](https://github.com/TaajL/09-Professional-README-Generator/blob/main/OUTPUT.md/#license)
  * [Credits](https://github.com/TaajL/09-Professional-README-Generator/blob/main/OUTPUT.md/#credits)
  * [Test Instructions](https://github.com/TaajL/09-Professional-README-Generator/blob/main/OUTPUT.md/#Test)
  * [Questions?](https://github.com/TaajL/09-Professional-README-Generator/blob/main/OUTPUT.md/#contact)

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