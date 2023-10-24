// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache') {
    return 'https://img.shields.io/badge/License-Apache%202.0-blue.svg';
  }
  if (license === 'GNU') {
    return 'https://img.shields.io/badge/License-GPLv3-blue.svg';
  }
  if (license === 'MIT') {
    return 'https://img.shields.io/badge/License-MIT-yellow.svg';
  }
  if (license === 'BSD') {
    return 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg';
  }
  if (license === 'Mozilla') {
    return 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg';
  }
  if (license === 'None') {
    return '';
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache') {
    return 'https://opensource.org/licenses/Apache-2.0';
  }
  if (license === 'GNU') {
    return 'https://www.gnu.org/licenses/gpl-3.0';
  }
  if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT';
  }
  if (license === 'BSD') {
    return 'https://opensource.org/licenses/BSD-3-Clause';
  }
  if (license === 'Mozilla') {
    return 'https://opensource.org/licenses/MPL-2.0';
  }
  if (license === 'None') {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  var badge = ``;
  if (license == 'None'){
    return ``;
  }
  for (var i = 0; i < license.length; i++) {
    var img = renderLicenseBadge(license[i]);
    var link = renderLicenseLink(license[i]);
    badge += `[![License](${img})](${link})`;
  }
    return `## License ${badge}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}
  

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Test](#test)
  * [License](#license)
  

  ## Installation

  ${data.installation}


  ## Usage

  ${data.usage}


  ## Contribution

  ${data.contribution}


  ## Test

  ${data.test}


  ## License

  ${renderLicenseSection(data.license)}


  ## Questions

  If you have any questions, please contact me at ${data.email}. You can find more of my work at [${data.username}](https://github.com/${data.username}/).

`;
}

module.exports = generateMarkdown;
