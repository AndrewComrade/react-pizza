# React-pizza

An application used to order some delicious pizza.
Project based on ReactJS, Redux, JS, SCSS. Using json-server for fake back-end to sort and filter pizzas.

## Project Status

This project is currently in development.
Users can change type and size of pizza.
Change sort and filter status. 

Sorting and filtrating functionality is in progress.

## Technology Stack

- React.js
- React router
- Redux
- Redux thunk
- classnames
- json-server

## Installation and Setup

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

**Installation:**

To install project dependencies run

`npm install`

**Setup:**

To start the project run

`npm start` for starting project and then `npm server` for starting json-server

**To visit app:**

localhost:3000

**To visit pizzas:**

localhost:3001/pizzas

## Structure

**Components:**

Folder contains all basic components like header, pizza block, categories, button etc.
All `.jsx` files should be imported to `index.js` first and then to other Components/Pages.

**Pages:**

Folder contains routes of app.
All `.jsx` files should be imported to `index.js` first.

**Redux:**

Folder contains actions, reducers and store of app.
`redux/reducers/index.js` is using to combine reducers.

**Assets:**

Folder contains media files like image.

**Scss:**

Folder contains styles for components, general styles, scss variables, fonts and normalize lib.

**Aliases:**

For shorter imports you can use aliases:
- `@assets` for src/assets,
- `@components` for src/components,
- `@pages` for src/pages,
- `@actions` for src/redux/actions,
- `@reducers` for src/redux/reducers

**Babel:**

`.babelrc` it's Babel configuration file.

**Webpack config:**

It's webpack settings. Contains HTMLPlugin, CleanWebpackPlugin, devServer, sass-loader, file-loader.


