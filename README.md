# back-end-assignment-boilerplate

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Back end assignment boilerplate provides a starting point for solving tasks
which are a part of the hiring process, so that it is easier and more efficient
for candidates. It also gives a good indication of expectations and code style
at Dott.

## Usage

Use this repository as a
[template](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template).

## Getting Started

These instructions will get you a copy of the project up and running on your
local machine for development and testing purposes. See usage notes on how to
consume this package in your project.

### Prerequisites

Minimal requirements to set up the project:

- [Node.js](https://nodejs.org/en) v10, installation instructions can be found
  on the official website, a recommended installation option is to use
  [Node Version Manager](https://github.com/creationix/nvm#readme). It can be
  installed in a
  [few commands](https://nodejs.org/en/download/package-manager/#nvm).
- A package manager [npm](https://www.npmjs.com). All instructions in the
  documentation will follow the npm syntax.
- Optionally a [Git](https://git-scm.com) client.

### Installing

Start by cloning the repository:

```bash
git clone git@github.com:ridedott/back-end-assignment-boilerplate.git
```

In case you don't have a git client, you can get the latest version directly by
using
[this link](https://github.com/ridedott/back-end-assignment-boilerplate/archive/master.zip)
and extracting the downloaded archive.

Go the the right directory and install dependencies:

```bash
cd back-end-assignment-boilerplate
npm install
```

That's it! You can now go to the next step.

## Tests

All tests are being executed using [Jest](https://jestjs.io). All tests files
live side-to-side with a source code and have a common suffix: `.spec.ts`. Some
helper methods can be stored in the `test` directory.

There are three helper scripts to run tests in the most common scenarios:

```bash
npm run test
npm run test:watch
npm run test:coverage
```

## Formatting

This project uses [Prettier](https://prettier.io) to automate formatting. All
supported files are being reformatted in a pre-commit hook. You can also use one
of the two scripts to validate and optionally fix all of the files:

```bash
npm run format
npm run format:fix
```

## Linting

This project uses [ESLint](https://eslint.org) to enable static analysis.
TypeScript files are linted using a [custom configuration](./.eslintrc). You can
use one of the following scripts to validate and optionally fix all of the
files:

```bash
npm run lint
npm run lint:fix
```

## Publishing

Content of this repository is not published to any package registry.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).

## Built with

### Runtime libraries

### Automation

- [Dependabot](https://dependabot.com/)

### Source

- [TypeScript](https://www.typescriptlang.org)

### Delivery

## Versioning

This project adheres to [Semantic Versioning](http://semver.org) v2.
