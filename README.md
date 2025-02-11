<div align="center">
  👷
</div>
<h1 align="center">
    TS-Builder
</h1>

<p align="center">
   The builder pattern for TypeScript 
</p>

<p align="center">
   Version 0.1.0
</p>

<p align="center">
    <a href="https://sonarcloud.io/summary/new_code?id=OpenFoxes_ts-builder"><img src="https://sonarcloud.io/api/project_badges/quality_gate?project=OpenFoxes_ts-builder" alt="Quality gate" /></a>
</p>

<br />

## Information

This library allows you to use the Builder Pattern for types and interfaces in TypeScript.
It aims to work dynamically without the need for separately generated builder classes.
It should be applicable to existing code without requiring additional modifications.

## Usage

To generate a builder for the interface "Frog" just create a TSBuilder:

```typescript
import TsBuilder from "@openfoxes/ts-builder";

interface Frog {
  name: string;
  color: "green" | "red";
  calm: boolean;
}

// Use the TsBuilder:
const frogBuilder = TsBuilder.makeBuilderFor<Frog>();
const frog = frogBuilder
  .set("name", "Klaus")
  .set("color", "green")
  .set("calm", true)
  .build();

```

### Pre-requisites

Install the package:

```bash
npm install @openfoxes/ts-builder
```

or

```bash
npm install -E @openfoxes/ts-builder@0.1.0
```

## Development

This repository strives to make the best possible use of TypeScript's capabilities.
However, it is unfortunately not easily possible to provide a fully-fledged builder dynamically and in real-time.
Work is ongoing to offer more user-friendly methods in the future and to improve error handling.
For now, though, it is already an improvement over relying solely on constructors or manually creating builders.

### Code Quality

This project aims to provide a clean and secure design.
In order to optimize the underlying code and reducing the risk of bugs, quality tools are used:

<p align="center">
    <a href="https://sonarcloud.io/summary/new_code?id=OpenFoxes_ts-builder"><img src="https://sonarcloud.io/api/project_badges/quality_gate?project=OpenFoxes_ts-builder" alt="Quality gate" /></a>
</p>

<p align="center">
    <a href="https://sonarcloud.io/summary/new_code?id=OpenFoxes_ts-builder"><img src="https://sonarcloud.io/api/project_badges/measure?project=OpenFoxes_ts-builder&metric=bugs" alt="Bugs" /></a>
    <a href="https://sonarcloud.io/summary/new_code?id=OpenFoxes_ts-builder"><img src="https://sonarcloud.io/api/project_badges/measure?project=OpenFoxes_ts-builder&metric=code_smells" alt="Code Smells" /></a>
    <a href="https://sonarcloud.io/summary/new_code?id=OpenFoxes_ts-builder"><img src="https://sonarcloud.io/api/project_badges/measure?project=OpenFoxes_ts-builder&metric=duplicated_lines_density" alt="Duplicated Lines (%)" /></a>
</p>
