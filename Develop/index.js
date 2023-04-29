// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is the title of your project?",
    },
    {
        type: 'list',
        name: 'license',
        message: "What license did you use for this project?",
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
    },
    {
        type: 'input',
        name: 'description',
        message: "What is the description of your project?",
    },
    {
        type: 'input',
        name: 'installation',
        message: "What are the steps required to install your project?",
    },
    {
        type: 'input',
        name: 'usage',
        message: "What is the usage information for your project?",
    },
    {
        type: 'input',
        name: 'credits',
        message: "Who contributed to this project?",
    },
    {
        type: 'input',
        name: 'userStory',
        message: "What is the user story for your project?",
    },
    {
        type: 'input',
        name: 'acceptanceCriteria',
        message: "What is the acceptance criteria for your project?",
    },
    {
        type: 'input',
        name: 'tests',
        message: "What are the test instructions for your project?",
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: "What is your GitHub username?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email address?",
    }
];
// TODO: Create a function to write README file
inquirer.prompt(questions).then((answers) => {
    const { title, license, description, installation, usage, credits, userStory, acceptanceCriteria, tests, githubUsername, email} = answers;

const README = 
`# ${title}
## License

${generateMarkdown(license)}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [User Story](#userStory)
* [Acceptance Criteria](#acceptanceCriteria)
* [Tests](#tests)
* [GitHub](#github)
* [Email](#email)
* [License](#license)

## Description

${description}

## Installation

${installation}

## Usage

${usage}

## Credits

${credits}

## User Story

${userStory}

## Acceptance Criteria

${acceptanceCriteria}

## Tests

${tests}

## GitHub

[https://github.com/${githubUsername}](https://github.com/${githubUsername})

## Email

[mailto:${email}](mailto:${email})
`;
// fs to write file
fs.writeFile('README.md', README, err => {
    if (err) {
        console.log(err);
    }
    else {
        console.log('Success!');
    }
}
);
});