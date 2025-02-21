function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    case 'Apache 2.0':
      return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
    case 'GPL 3.0':
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    case 'BSD 3':
      return '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
    default:
      return '';
  }
}

function renderLicenseLink(license) {
 switch (license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'Apache 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'GPL 3.0':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    case 'BSD 3':
      return 'https://opensource.org/licenses/BSD-3-Clause';
    default:
      return '';
  }
}

function renderLicenseSection(license) {
  const licenseBody = `This project is licensed under the ${license} license. Click [here](${renderLicenseLink(license)}) for more information.`
  if (license === 'None') {
    return '';
  } else {
    return `${licenseBody.trim()}`
  }
}

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Overview
  ${data.description}

  <details>
    <summary>Table of Contents</summary>

  - [Overview](#overview)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Project Structure](#project-structure)
  - [Documentation](#documentation)
  - [Setup & Installation](#setup--installation)
  - [Usage](#usage)
  - [Video Walkthrough](#video-walkthrough)
  - [Future Enhancements](#future-enhancements)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  </details>

  ### Features
  ${data.features}

 ### Tech Stack
- ${Array.isArray(data.techStack)
      ? data.techStack.join("\n - ")
      : (data.techStack || "").split(",").map((item) => item.trim()).join("\n - ")}


  ### Project Structure
  \`\`\`
  ${data.projectStructure}
  \`\`\`

  ### Documentation
  [Project Documentation](${data.documentationLink})

  ### Setup & Installation
  ${data.installation}

  ### Usage
  ${data.usage}

  ### Video Walkthrough
  [Watch the demo](${data.videoWalkthrough})

  ### License
  ${renderLicenseSection(data.license)}

  ### Contributing
  ${data.contributing}

  ### Tests
  ${data.tests}

  ### Questions
  For any questions, reach out to me on GitHub: [${data.github}](https://github.com/${data.github})
  
  ### Future Enhancements
  ${data.futureEnhancements}
`;
}

export default generateMarkdown;
