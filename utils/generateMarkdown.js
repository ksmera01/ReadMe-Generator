function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description

  ${data.description}
 
  ## Installation

  Installation requirements: ${data.installation}

  Testing requirements: ${data.tests}

  ## Instructions

  - ${data.usage}

  ## License

  - ${data.license}

  ## Contributors

  - ${data.contribute}

  ## Link to Deployed Application

  - ${data.githubLink}

  ## Questions? Feel free to contact me at ksmera01@gmail.com
  
  `;
}

module.exports = generateMarkdown;