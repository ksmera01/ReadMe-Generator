const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const useMarkdownFile = require("./utils/generateMarkdown.js");

const writeFileAsync = util.promisify(fs.writeFile);

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
      message: "Please list any installation commands needed for this project."
    },
    {
      type: "input",
      name: "installationNotes",
      message: "Are there any additional installation notes for this project?"
    },
    {
      type: "input",
      name: "tests",
      message: "Please list any testing commands needed for this project."
    },
    {
      type: "input",
      name: "usage",
      message: "Please enter any instruction notes about usage of the application."
    },
    {
      type: "list",
      name: "license",
      message: "Please select a license for your project.",
      choices: ["None", "ISC", "MIT", "Apache", "GPL"]
    },
    {
      type: "input",
      name: "contribute",
      message: "Please list any additional contributors to this project."
    },
  ]);
}

async function init() {
  try {
    const answers = await promptUser();

    const newReadMe = useMarkdownFile(answers);

    await writeFileAsync("README.md", newReadMe);

    console.log("Well done! You created a good looking README.md");
  } catch (err) {
    console.log(err);
  }
}

init();