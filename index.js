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
      message: "How do you install your application?",
    },
    {
      type: "input",
      name: "instructions",
      message: "Enter the instructions to use your application.",
    },
    {
      type: "input",
      name: "usage",
      message: "How does a user use this application?",
    },
    {
      type: "input",
      name: "license",
      message: "License?",
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
      name: "questions",
      message: "How can you be contacted for quetsions?",
    },
  ]);
};

const generateHTML = (answers) =>
  `
  # <${answers.name}>
  
//     <h1 class="display-4">Hi! My name is ${answers.name}</h1>
//     <p class="lead">I am from ${answers.location}.</p>
//     <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
//     <ul class="list-group">
//       <li class="list-group-item">My GitHub username is ${answers.github}</li>
//       <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
//     </ul>
//   </div>
// </div>
// </body>
// </html>
`;

// Bonus using writeFileAsync as a promise
const init = () => {
  promptUser()
    .then((answers) => writeFileAsync("READMEsample.md", generateHTML(answers)))
    .then(() => console.log("Successfully wrote to README.md"))
    .catch((err) => console.error(err));
};

init();
