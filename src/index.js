import React from 'react';
import ReactDOM from 'react-dom';
import './global.scss';
import App from './App';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api-eu-central-1.graphcms.com/v2/ckl8owb3lgu3v01wg5ry2desc/master',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);
