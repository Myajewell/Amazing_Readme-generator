// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}

  # Table of Contents
  -[description](#description)
  -[installation](#installation)
  -[usage](#usage)
  -[license](#license)
  -[contribution](#contribution)
  -[test](#test)
  -[questions](#questions)
  -[username](#username)
  -[email](#email)
      
  ## description:
  ${response.description}
     
  ## installation: 
  ${response.installation}
     
  ## usage: 
  ${response.usage}
     
  ## license: 
  ${response.license}
     
  ## contribution: 
  ${response.contribution}
      
  ## test:
  ${response.test}

  ## questions: Please contact me here with any questions.

  ## username:
  (<a href="https://github.com/Myajewell/Amazing_Readme-generator" target="_blank">GitHub: ${response.username}</a>)
     
  ## email: 
  ${response.email}
`;
}

module.exports = generateMarkdown;
