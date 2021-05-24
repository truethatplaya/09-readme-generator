const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of your application?",
    },
    {
      type: "input",
      name: "description",
      message: "Type in a description of your application?",
    },
    {
      type: "input",
      name: "tableOfContents",
      message: "Enter the Table of Contents for your application?",
    },
    {
      type: "input",
      name: "installation",
      message:
        "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
    },
    {
      type: "input",
      name: "usage",
      message: "Provide instructions and examples for use.",
    },
    {
      type: "list",
      name: "license",
      message: "Choose a license.",
      choices: ["Apache", "MIT", "GNU GPLv3"],
    },
    {
      type: "input",
      name: "contributions",
      message: "How can someone contribute to your application?",
    },
    {
      type: "input",
      name: "test",
      message: "How does a user test this application?",
    },
    {
      type: "input",
      name: "github",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    },
  ]);
};

const generateREADME = (answers) =>
  `
  # <${answers.name}>

  ## Description
  
  ${answers.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  
  ${answers.installation}
  
  ## Usage
  
  ${answers.usage}
  
  ## License
  
  ${answers.license}
  
  ## Contributors
  
  ${answers.contributions}
  
  ## Tests
  
  ${answers.test}
  
  ## Questions
  
  https://github.com/${answers.questions}
  ${answers.email}
  
`;

const init = () => {
  promptUser()
    .then((answers) =>
      writeFileAsync("READMEsample.md", generateREADME(answers))
    )
    .then(() => console.log("Successfully wrote to README.md"))
    .catch((err) => console.error(err));
};

init();
