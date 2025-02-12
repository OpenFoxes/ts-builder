import * as fs from "fs";

export const generateReadme = (version: string) => {
  if (!version || !/^\d+\.\d+\.\d+$/.test(version)) {
    console.error("Semantic version number expected!");

    return;
  }

  const readme = `${generateEAWarning()}

${generateHeader(version)}

${generateInfo()}

${generateUsage()}

${generatePreRequieries(version)}

${generateDevelopment()}

${generateCodeQuality()}
`;

  try {
    fs.writeFileSync("./README.md", readme);
  } catch (err) {
    if (err !== null) {
      console.error("Fehler beim Generieren der Readme-Datei!", err);
    }
  }
};

const generateEAWarning = () => {
  return `<h1 align="center">
    Attention!
</h1>

<p align="center">
   This package is in an early development stage!
</p>

<p align="center">
   Currently there is no stable builder available.
</p>

<p align="center">
    The current phase tests different approaches as well as the deployment itself.
</p>

<br />`;
};

const generateHeader = (version: string) => {
  return `<div align="center">
  👷
</div>
<h1 align="center">
    TS-Builder
</h1>

<p align="center">
   The builder pattern for TypeScript 
</p>

<p align="center">
   Version ${version}
</p>

<p align="center">
    <a href="https://sonarcloud.io/summary/new_code?id=OpenFoxes_ts-builder"><img src="https://sonarcloud.io/api/project_badges/quality_gate?project=OpenFoxes_ts-builder" alt="Quality gate" /></a>
</p>

<br />`;
};

const generateInfo = () => {
  return `## Information

This library allows you to use the Builder Pattern for types and interfaces in TypeScript.
It aims to work dynamically without the need for separately generated builder classes.
It should be applicable to existing code without requiring additional modifications.`;
};

const generateCodeQuality = () => {
  return `### Code Quality

This project aims to provide a clean and secure design.
In order to optimize the underlying code and reducing the risk of bugs, quality tools are used:

<p align="center">
    <a href="https://sonarcloud.io/summary/new_code?id=OpenFoxes_ts-builder"><img src="https://sonarcloud.io/api/project_badges/quality_gate?project=OpenFoxes_ts-builder" alt="Quality gate" /></a>
</p>

<p align="center">
    <a href="https://sonarcloud.io/summary/new_code?id=OpenFoxes_ts-builder"><img src="https://sonarcloud.io/api/project_badges/measure?project=OpenFoxes_ts-builder&metric=bugs" alt="Bugs" /></a>
    <a href="https://sonarcloud.io/summary/new_code?id=OpenFoxes_ts-builder"><img src="https://sonarcloud.io/api/project_badges/measure?project=OpenFoxes_ts-builder&metric=code_smells" alt="Code Smells" /></a>
    <a href="https://sonarcloud.io/summary/new_code?id=OpenFoxes_ts-builder"><img src="https://sonarcloud.io/api/project_badges/measure?project=OpenFoxes_ts-builder&metric=duplicated_lines_density" alt="Duplicated Lines (%)" /></a>
</p>`;
};

const generateUsage = () => {
  return `## Usage

To generate a builder for the interface "Frog" just create a TSBuilder:

\`\`\`typescript
${fs.readFileSync("internal/example-frog.ts").toString()}\`\`\``;
};

const generatePreRequieries = (version: string) => {
  return `### Pre-requisites

Install the package:

\`\`\`bash
npm install @openfoxes/ts-builder
\`\`\`

or

\`\`\`bash
npm install -E @openfoxes/ts-builder@${version}
\`\`\``;
};

const generateDevelopment = () => {
  return `## Development

This repository strives to make the best possible use of TypeScript's capabilities.
However, it is unfortunately not easily possible to provide a fully-fledged builder dynamically and in real-time.
Work is ongoing to offer more user-friendly methods in the future and to improve error handling.
For now, though, it is already an improvement over relying solely on constructors or manually creating builders.`;
};
