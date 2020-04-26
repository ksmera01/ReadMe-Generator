function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents
  
  - [Installation](#installation)
  - [Testing](#testing)
  - [Instructions](#instructions)
  - [License](#license)
  - [Contributors](#contributors)
  - [Link to Deployed Application](#link)
  - [Questions](#questions)
 
  ## Installation

  - Run Command: ${data.installation}
  - Notes: ${data.installationNotes}

  ## Testing
  
  - Run Command: ${data.tests}

  ## Instructions

  - ${data.usage}

  ## License

  [!License (https://img.shields.io/badge/License-${data.license}-orange.svg)]

  ## Contributors

  - ${data.contribute}

  ## Link

  - ${data.githubLink}

  ## Questions? 
  
  - Feel free to contact me at ksmera01@gmail.com
  
  `;
}

module.exports = generateMarkdown;