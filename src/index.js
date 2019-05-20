import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo';

import './styles/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const AUTH_TOKEN = process.env.AUTH_TOKEN || `a13d0fa2f131e79888d4c22b1b6a3dd481a87f06`;

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: operation => {
    operation.setContext({
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`
      },
    });
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
