# Google News RSS Reader

This is a single page application that reads Google News RSS feed and renders it on the frontend.

## Setup

1. Clone the repository:
   ```
   git clone https://github.com/mnsym/copilot-workspace-demo.git
   cd copilot-workspace-demo
   ```

2. Install dependencies:
   ```
   yarn install
   ```

## Running the application

### Backend

To start the backend server, run:
```
yarn start
```

The backend server will be running on `http://localhost:5000`.

### Frontend

To start the frontend development server, run:
```
yarn start:frontend
```

The frontend development server will be running on `http://localhost:8080`.

## Creating bundle.js

To create the `bundle.js` file, run:
```
yarn build
```

This will use the `webpack` configuration specified in `webpack.config.js` to create the `bundle.js` file in the `dist` directory.

## Dependencies

- axios
- date-fns
- express
- react
- react-dom
- rss-parser
- webpack
- webpack-cli
- webpack-dev-server
- @babel/core
- @babel/preset-env
- @babel/preset-react
- babel-loader
