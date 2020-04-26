const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generate = require("./utils/generateMarkdown.js")

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is your ReadMe title?"
    },
    {
      type: "input",
      name: "description",
      message: "Please type your description."
    },
    {
      type: "input",
      name: "githubLink",
      message: "Please type the link to your deployed project."
    },
    {
      type: "input",
      name: "installation",
      message: "Please enter installation notes."
    },
    {
      type: "input",
      name: "usage",
      message: "Please enter any notes about usage of the application."
    },
    {
      type: "input",
      name: "license",
      message: "Please select a license for your project.",
      choices: ["None", "ISC", "MIT", "Apache", "GNU General Public License 3.0"]
    },
    {
      type: "input",
      name: "contribute",
      message: "Please list any additional contributors to this project."
    },
    {
      type: "input",
      name: "tests",
      message: "Please list any testing commands needed for this project."
    },
    {
      type: "input",
      name: "questions",
      message: "Please list any testing commands needed for this project."
    }
  ]);
}

function writeToFile(fileName, data) {
}

function init() {
  try {
    const answers = await promptUser();

    const html = generateHTML(answers);

    await writeFileAsync("index.html", html);

    console.log("Successfully wrote to index.html");
  } catch (err) {
    console.log(err);
  }
}

init();