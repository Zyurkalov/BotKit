# BOTkit

## Table of Contents

1. [Overview](#overview)
   - [Figma](#figma)
   - [Hosting](#hosting)
   - [Collaborators](#collaborators)
2. [Technologies](#technologies)
3. [Code Quality with Prettier and Husky](#code-quality-with-prettier-and-husky)
4. [Project Setup / Installation](#project-setup--installation)
5. [Building the Project](#building-the-project)

## Overview

BOTkit is a chat bot commercial project developed to streamline business communications. BOTkit automates routine tasks, provides customer service, and enhances the user experience on your platform.

### Figma

- [Prototypes](<https://www.figma.com/file/TmerP2HqAuh7zRWpDLW5hG/BOTkit-Admin-panel-(Copy)?type=design&node-id=1440-199297&mode=design&t=4MXAOeIOJPARa1Bs-0>)

### Hosting

BOTkit project will be hosted on Versel once the repository becomes public.

### Collaborators

This project is developed by:

- [@Aldukhov](https://github.com/Aldukhov)
- [@Aldvor](https://github.com/Aldvor)
- [@catherinsmi](https://github.com/catherinsmi)
- [@dinosaurivan](https://github.com/dinosaurivan)
- [@edgar-ianke](https://github.com/edgar-ianke)
- [@HockeyBear](https://github.com/HockeyBear)
- [@S25KeePeR](https://github.com/S25KeePeR)
- [@triple62la](https://github.com/triple62la)
- [@VeraDgt](https://github.com/VeraDgt)
- [@Zyurkalov](https://github.com/Zyurkalov)
- [@private-lazy-val](https://github.com/private-lazy-val)

Feel free to contribute to the development and enhancement of this project.

## Technologies

The following technologies were used to develop this project:

- HTML5 / SASS / JS
- Webpack
- Babel
- Prettier and Husky

For package dependencies and project scripts, refer to the `package.json` file in the project's root directory. For details on the webpack configuration, refer to the `webpack.config.js` file.

## Code Quality with Prettier and Husky

To maintain a consistent code style and quality, this project uses Prettier and Husky.

### Prettier

Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and reprinting it with its own rules that take the maximum line length into account, wrapping code when necessary. It integrates with most editors and has few options.

For this project, Prettier is configured to automatically format your code in a consistent style. The configuration can be found in the `.prettierrc` file in the project's root directory.

### Husky

Husky is a tool that makes it easy to use githooks. Githooks are scripts that Git executes before or after events such as: `commit`, `push`, etc. In this project, we're using Husky to ensure every commit meets the Prettier formatting standards.

The husky configuration can be found in the `package.json` file and is set to automatically format all staged files before a commit is made. If the formatting fails, the commit will not be made until the issues are resolved.

This setup helps to catch any style errors before they're committed, reducing the number of linting errors and ensuring that all committed code adheres to the same style.

Husky hooks are automatically installed after running `npm install`. Alternatively, you can manually install them by running `npm run prepare`.

## Project Setup / Installation

1. Clone this repository: `git clone https://github.com/private-lazy-val/botkit.git`
2. Navigate to the project directory: `cd botkit`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`

## Building the Project

To build the project, use the following npm script command:

`npm run build`
This command will run the webpack bundler in production mode, which will create an optimized build of your project in the `dist` directory.
