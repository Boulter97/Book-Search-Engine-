const { Book, User } = require('../models');

const resolvers= {
    Query: {
    books: async () => {
        try {
            const books = await Book.find();
            return books;
        }   catch (err) {
            throw new Error('Failed to fetch books');
        }
      },
    },
    Mutation: {
addBook: async (_, {title, authors, description }) => {
    try {
        const newBook = await Book.create({ title, authors, description });
        return newBook;
    }   catch (err) {
        throw new Error('Failed to add the book.');
    }
    },
   },
};

module.exports = resolvers;