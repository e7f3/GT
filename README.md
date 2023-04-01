# template-react (React TypeScript Starter Template)

This starter template is designed for building modern React applications with TypeScript. It includes pre-configured settings for Webpack, ESLint, Stylelint, Jest, and Storybook.

## Features

- React with TypeScript
- Webpack for bundling and build optimizations
- ESLint for JavaScript and TypeScript code linting
- Stylelint for CSS code linting
- Jest for unit testing
- Storybook for developing and showcasing UI components in isolation

## Getting Started

### Prerequisites

Before getting started, make sure you have the following software installed on your computer:

- Node.js (LTS version recommended)
- Yarn or npm (Yarn recommended)

### Installation

1. Clone the repository:

git clone https://github.com/e7f3/template-react.git


2. Install dependencies:

With Yarn:
yarn install

With npm:
npm install


### Development

To start the development server, run the following command:

With Yarn:
yarn start

With npm:
npm start

Open your browser and navigate to `http://localhost:3000`. The application will automatically reload when you make changes to the code.

### Building for Development

To create a development build, run the following command:

With Yarn:
yarn build:dev

With npm:
npm run build:dev

### Building for Production

To create a production build, run the following command:

With Yarn:
yarn build:prod

With npm:
npm run build:prod

The compiled files will be located in the `dist` folder.

### Testing

To run tests using Jest, execute the following command:

With Yarn:
yarn test:unit

With npm:
npm run test:unit

### Storybook

To start Storybook, execute the following command:

With Yarn:
yarn storybook

With npm:
npm run storybook

This will start Storybook at http://localhost:6006.

To create a static version of your Storybook for deployment, execute the following command:

With Yarn:
yarn storybook:build

With npm:
npm run storybook:build

This command will generate a static version of your Storybook in the storybook-static folder, which you can then deploy to any static site hosting service.

### Linting

To run TypeScript linting, execute the following command:

With Yarn:
yarn lint:ts

With npm:
npm run lint:ts

To automatically fix TypeScript linting issues, execute the following command:

With Yarn:
yarn lint:ts:fix

Winh npm:
npm run lint:ts:fix

To run SCSS linting, execute the following command:

With Yarn:
yarn lint:scss

With npm:
npm run lint:scss

To automatically fix SCSS linting issues, execute the following command:

With Yarn:
yarn lint:scss:fix

With npm:
npm run lint:scss:fix


### License

This project is licensed under the MIT License - see the LICENSE.md file for details.

