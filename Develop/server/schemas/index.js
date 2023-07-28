// schemas/index.js
const { gql } = require('apollo-server-express');
const { ApolloClient, InMemoryCache } = require('@apollo/client');
const React = require('react');
const ReactDOM = require('react-dom');
const App = require('../path/to/App'); // Replace '../path/to/App' with the actual path to your App component

const client = new ApolloClient({
  uri: '/graphql', // The URI of your Apollo Server
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

const typeDefs = gql`
  type Book {
    # Define your Book type fields here (e.g., _id, title, authors, description, etc.)
  }

  type User {
    # Define your User type fields here (e.g., _id, username, email, savedBooks, etc.)
  }

  type Query {
    # Define your Query type fields here (e.g., me, books, etc.)
  }

  type Mutation {
    # Define your Mutation type fields here (e.g., login, addUser, saveBook, removeBook, etc.)
  }
`;


const { Book, User } = require('../models');

const resolvers = {
  Query: {
  
  },
  Mutation: {
   
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
