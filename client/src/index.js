import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App/App';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
});

const root = (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

ReactDOM.render(root, document.getElementById('root'));
