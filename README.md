# Bauer Media frond end test Application

> A sample Bauer Media frond end test application built in React-hooks and express.js

## Pre-requisites

```
  node v10.5.3
  npm v6.4.1
  yarn v1.15.2
  nodemon v2.0.2
```

## Front end Library used

```
  bootstrap/reactstrap: responsive design
  node-sass: scss pre-processer
```

## Unit Test Library used

```
  Jest
  react-testing-library
  react-hooks-testing-library
```

## Manual Test result

This project is tested with following browsers in Win10 64bit OS

```
  Chrome Ver. 80.0.3987.116
  FireFox Ver. 73.0.1
  Edge Ver. 44.18362.449.0
```

## How to run this project locally

In the project directory, you can run:

### `yarn install`

#### just run script `yarn install-all` in root path of this project
  yarn install-all
Or

#### Install necessary dependency packages in both root path and `client` directory manually.

  yarn install
  cd client
  yarn install

### `yarn dev`

After depenendency packages are installed, go back to root directory of this project, and then run `yarn dev`
yarn dev

and then open the browser with http://localhost:3000

### `yarn test`

run `yarn test` under root directory, it would start node server to allow front end to fetch API data to mock testing

## Q&A

For Tablet layout, using grid 2x2 to show remaining teasers with summary and title to be right side might be a little crowded. Image looks a little small and text content is quite long. Can we just show 4\*1 grid instead?

## TODO

### IE11 is not well-supported.

### Image LazyLoad?
