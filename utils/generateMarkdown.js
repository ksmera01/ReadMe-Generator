function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents
  
  - [Installation](#installation)
  - [Testing](#testing)
  - [Usage](#usage)
  - [License](#license)
  - [Contributors](#contributors)
  - [Link to Deployed Application](#link)
  - [Questions](#questions)
 
  ## Installation

  - Run Command: ${data.installation}
  - Notes: ${data.installationNotes}

  ## Tests
  
  - Run Command: ${data.tests}

  ## Usage

  - ${data.usage}

  ## License

  ![License](https://img.shields.io/badge/License-${data.license}-orange.svg)

  ## Contributors

  - ${data.contribute}

  ## Link

  - ${data.githubLink}

  ## Questions? 
  
  - Feel free to contact me at ${data.githubEmail}
  
  `;
}

module.exports = generateMarkdown;