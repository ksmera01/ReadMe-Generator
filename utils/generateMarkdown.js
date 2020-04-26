function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents
  
  - [Installation Requirements](#installation requirements)
  - [Testing](#testing)
  - [Instructions](#instructions)
  - [License](#license)
  - [Contributors](#contributors)
  - [Link](#link to Deployed Application)
  - [Questions](#questions)
 
  ## Installation Requirements

  - Run Command: ${data.installation}
  - Notes: ${data.installationNotes}

  ## Testing
  
  - Run Command: ${data.tests}

  ## Instructions

  - ${data.usage}

  ## License

  - ${data.license}

  ## Contributors

  - ${data.contribute}

  ## Link to Deployed Application

  - ${data.githubLink}

  ## Questions? 
  
  - Feel free to contact me at ksmera01@gmail.com
  
  `;
}

module.exports = generateMarkdown;