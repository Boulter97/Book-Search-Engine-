const { gql } = require('apollo-server-express');

const typeDefs = gql`  
  type Book {
    # Define  Book type fields here (e.g., _id, title, authors, description, etc.)
  }

  type User {
    # Define User type fields here (e.g., _id, username, email, savedBooks, etc.)
  }

  type Query {
    # Define  Query type fields here (e.g., me, books, etc.)
  }

  type Mutation {
    # Define Mutation type fields here (e.g., login, addUser, saveBook, removeBook, etc.)
  }
`;

module.exports = typeDefs;