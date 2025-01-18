# Portfolio

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Expo](https://img.shields.io/badge/Expo-v48.0.0-blue)
![React Native](https://img.shields.io/badge/React%20Native-v0.71.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-v4.9.5-blue)
![Prettier](https://img.shields.io/badge/Prettier-v2.8.8-yellow)
![Jest](https://img.shields.io/badge/Jest-v29.0.0-red)

## Table of Contents

- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Linting & Formatting](#linting--formatting)
- [Testing](#testing)
- [Deployment](#deployment)
- [Best Practices](#best-practices)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Welcome to **My Web Portfolio**! This project is a cross-platform portfolio application built using React Native and Expo, optimized for both mobile and web platforms. It showcases my projects, skills, and experiences in a sleek and responsive design.

## Technologies Used

- **[React Native](https://reactnative.dev/)**: A framework for building native apps using React.
- **[Expo](https://expo.dev/)**: A platform and set of tools for universal React applications.
- **[TypeScript](https://www.typescriptlang.org/)**: A typed superset of JavaScript that compiles to plain JavaScript.
- **[ESLint](https://eslint.org/)** with **[Expo Configuration](https://github.com/Expo/javascript)**: For maintaining code quality and consistency.
- **[Prettier](https://prettier.io/)**: An opinionated code formatter.
- **[Jest](https://jestjs.io/)**: A delightful JavaScript Testing Framework with a focus on simplicity.
- **[React Navigation](https://reactnavigation.org/)**: Routing and navigation for your React Native apps.
- **[Husky](https://github.com/typicode/husky)** & **[lint-staged](https://github.com/okonet/lint-staged)**: For managing Git hooks and linting staged files.

## Features

- **Responsive Design**: Optimized for both mobile devices and web browsers.
- **Custom Fonts**: Integrated custom fonts using Expo's asset management.
- **Code Quality**: Enforced using ESLint with Expo's style guide and Prettier for formatting.
- **Automated Testing**: Set up with Jest to ensure reliability.
- **Version Control**: Managed with Git and hosted on GitHub.
- **Continuous Integration**: Hooks set up with Husky and lint-staged for pre-commit linting and formatting.

## Installation

### Prerequisites

- **Node.js** (LTS version recommended): [Download Node.js](https://nodejs.org/)
- **npm**: Comes bundled with Node.js
- **Git**: [Download Git](https://git-scm.com/)
- **Expo CLI**: Install globally using npm

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Up Custom Fonts**

   Ensure that your custom fonts are placed in the `assets/fonts` directory. Supported formats include `.ttf` and `.otf`.

4. **Configure Environment Variables**

   If your project uses environment variables, create a `.env` file in the root directory and add the necessary variables.

## Usage

### Running the Development Server

Start the Expo development server:

```bash
npm start
```

This will launch the Expo Dev Tools in your browser. You can run the app on:

- **Web Browser**: Press `w` in the terminal or click "Run in web browser."
- **Mobile Device**: Use the Expo Go app on your iOS or Android device and scan the QR code.

### Building for Production

To create a production-ready build for the web:

```bash
npm run build
```

The build will be generated in the `web-build` directory, which can be deployed to platforms like [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/), or GitHub Pages.

## Scripts

- **Start Development Server**

  ```bash
  npm start
  ```

- **Build for Web**

  ```bash
  npm run build
  ```

- **Lint Code**

  ```bash
  npm run lint
  ```

- **Fix Linting Issues**

  ```bash
  npm run lint:fix
  ```

- **Format Code**

  ```bash
  npm run format
  ```

- **Run Tests**

  ```bash
  npm test
  ```

## Linting & Formatting

### ESLint with Expo Configuration

Ensures code adheres to Expo's style guide, promoting consistency and best practices.

- **Configuration File**: `.eslintrc.js`
- **Running ESLint**

  ```bash
  npm run lint
  ```

- **Fixing Issues Automatically**

  ```bash
  npm run lint:fix
  ```

### Prettier

Formats code to maintain a consistent style across the codebase.

- **Configuration File**: `.prettierrc`
- **Running Prettier**

  ```bash
  npm run format
  ```

### Git Hooks with Husky and lint-staged

Automates linting and formatting before commits to ensure code quality.

- **Pre-commit Hook**: Runs ESLint and Prettier on staged files.

## Testing

### Jest

Used for writing and running tests to ensure application reliability.

- **Configuration File**: `jest.config.js`
- **Running Tests**

  ```bash
  npm test
  ```

- **Test Coverage**

  ```bash
  npm test -- --coverage
  ```

### ESLint Integration with Jest

Configured ESLint to recognize Jest globals like `it` and `expect` to prevent undefined errors in test files.

## Deployment

### Deploying to Netlify

1. **Create a Netlify Account**: [Netlify Sign Up](https://app.netlify.com/signup)
2. **Link Repository**: Connect your GitHub repository to Netlify.
3. **Configure Build Settings**:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `web-build`
4. **Deploy Site**: Netlify will automatically build and deploy your site.

### Other Deployment Platforms

- **Vercel**: [Vercel Deployment](https://vercel.com/docs)
- **GitHub Pages**: [GitHub Pages Deployment](https://pages.github.com/)

## Best Practices

### Code Quality

- **Linting**: Enforced using ESLint with Expo's configuration to maintain consistent code style and catch potential errors early.
- **Formatting**: Handled by Prettier to ensure uniform code formatting across the project.

### Version Control

- **Git**: Version control managed with Git, with a `.gitignore` file to exclude unnecessary files.
- **Commit Messages**: Use clear and descriptive commit messages for better project tracking.

### Continuous Integration

- **Pre-commit Hooks**: Set up with Husky and lint-staged to automatically lint and format code before commits.

### Asset Management

- **Custom Fonts**: Loaded using Expo's asset management, ensuring compatibility and performance.
- **Optimized Assets**: Images and other assets are optimized for fast loading times and better performance.

### Responsive Design

- **Cross-Platform Compatibility**: Designed to work seamlessly on both mobile devices and web browsers.
- **Flexible Layouts**: Utilized React Native's styling capabilities to create adaptable and responsive UI components.

### Documentation

- **Comprehensive README**: Provides clear instructions on setup, usage, and contribution guidelines.
- **Inline Comments**: Used judiciously to explain complex logic and enhance code readability.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. **Fork the Repository**
2. **Create a Feature Branch**

   ```bash
   git checkout -b feature/YourFeature
   ```

3. **Commit Your Changes**

   ```bash
   git commit -m "Add your feature"
   ```

4. **Push to the Branch**

   ```bash
   git push origin feature/YourFeature
   ```

5. **Open a Pull Request**

   Describe your changes and submit the pull request for review.

## License

This project is licensed under the [MIT License](LICENSE).

```