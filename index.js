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
      name: "installation",
      message: "What are the steps are required to install your project?",
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
      message: "Were there any collaborators?",
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
  - [License](#license)
  - [Contributors](#contributors)
  - [Tests](#tests)
  - [Questions](#questions)
  
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
  
  https://github.com/${answers.github}
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
