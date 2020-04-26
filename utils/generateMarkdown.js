function generateMarkdown(data) {
  return `
  # ${data.title}

  # ${data.description}

  # ${data.githubLink}

  # ${data.installation}

  # ${data.usage}

  # ${data.license}

  # ${data.contribute}

  # ${data.tests}

  # Questions?: Feel free to contact me at ksmera01@gmail.com
  
  `;
}

module.exports = generateMarkdown;