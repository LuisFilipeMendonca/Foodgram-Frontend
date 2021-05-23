# Daily Manager
## An application to store and see recipies

## Motivation
Build this frontend application to train my skills with ReactJs and to learn how to use Typescript with a React application. I also learned how to integrate @redux-toolkit as a global state manager.

## Features
- Register/Login/Logout/Reset_Password from user account
- Create/Read/Update/Delete operations on recipies
- Add recipies to favorites
- Rate recipies
- Sort recipies by creation date or rating

## Installation

This application requires [Node.js](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/) to run.

Download or clone the project on your machine, install the dependencies and start the server.

```sh
cd project_folder
npm install
```

## Usage
In order to use this application you will also need to run the [API](https://github.com/luisfilipemendonca/Foodgram-Backend) on your machine.

### Development

```sh
cd project_folder
npm start
```

By default the application will run on [http://localhost:3000](http://localhost:3000).

The application is configured to use the API running on port 3001. If you change that backend port, change the .env file on the project root with the new port.
```sh
REACT_APP_BACKEND_PORT=3001
```
