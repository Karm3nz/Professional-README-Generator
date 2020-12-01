// Javascript for Professional README Generator

// User Story
    // AS A developer
    // I WANT a README generator
    // SO THAT I can quickly create a professional README for a new project

// Instructions
    // GIVEN a command-line application that accepts user input
    // WHEN I am prompted for information about my application repository
    // THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
    // WHEN I enter my project title
    // THEN this is displayed as the title of the README
    // WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
    // THEN this information is added to the sections of the README entitled 
        // Description, 
        // Installation, 
        // Usage, 
        // Contributing, and 
        // Tests
    // WHEN I choose a license for my application from a list of options
    // THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
    // WHEN I enter my GitHub username
    // THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
    // WHEN I enter my email address
    // THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
    // WHEN I click on the links in the Table of Contents
    // THEN I am taken to the corresponding section of the README

//declaring variables
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateMarkdown")
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
function askQuestions() {
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "What is the project title?",
            validate: function(answer) {
                if (answer.length < 1) {
                    return console.log("A valid project title is required!");
                }
                return true;
            }
        },
        {
            type: "input",
            name: "description",
            message: "Write a brief description of your project: ",
            validate: function(answer) {
                if (answer.length < 1) {
                    return console.log("A valid project description is required!");
                }
                return true;
            }
        },
        {
            type: "input",
            name: "installation",
            message: "Describe the installation process: ",
        },
        {
            type: "input",
            name: "usage",
            message: "What is this project usage for?"
        },
        {
            type: "input",
            name: "credit",
            message: "If you used any third-party assets that require attribution or followed tutorials, include links to those here as well."
        },
        {
            type: "list",
            name: "license",
            message: "Choose the license for this project: ",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "Who are the contributors of this projects?"
        },
        {
            type: "input",
            name: "tests",
            message: "Is there a test included, if so, what are the instructions to run it?"
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username: ",
            validate: function(answer) {
                if (answer.length < 1) {
                    return console.log("A valid Github username is required!");
                }
                return true;
            }     
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email: ",
            validate: function(answer) {
                if (answer.length < 1) {
                    return console.log("A valid email is required!");
                }
                return true;
            }
        }
    ]);
} 

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
// Async function using util.promisify 
async function init() {
    try {
        // Ask user questions and generate responses
        const answers = await askQuestions();
        const generateContent = generateReadme(answers);
        // Write new README.md to dist directory
        await writeFileAsync('./dist/README.md', generateContent);
        console.log('Successfully wrote to README.md!');
    }   
    catch(err) {
        console.log(err);
    }
}

// function call to initialize program
init();
