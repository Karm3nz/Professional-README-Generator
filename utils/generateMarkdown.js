// function to generate markdown for README
function generateMarkdown(answers) {
  return ` 
  # ${answers.projectTitle}
  
  ![badge](https://img.shields.io/badge/license-${answers.license}-green)<br />

  ## Description 

  ${answers.description}


  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation

  ${answers.installation}

  ## Usage 

  ${answers.usage}


  ## Credits

  ${answers.credit}

  ## License

  ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
  <br />
  This application is covered by the ${answers.license} license. 

  ---

  ## Contributing

  ${answers.contributing}

  ## Tests

  ${answers.tests}

  ## Questions

  Find me on GitHub: [${answers.username}](https://github.com/${answers.username})
  <br>
  Email me your questions: ${answers.email}
  <br>
`;
}

module.exports = generateMarkdown;
