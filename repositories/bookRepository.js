const connectDatabase = require('../config/database');
const { BookModel, Book } = require('../models/book');

class BookRepository {
  async findById(id) {
    try {
      await connectDatabase();
      return await BookModel.findById(id);
    } catch (error) {
      console.error('Failed to retrieve book by ID:', error);
      throw error;
    }
  }

  async findAll() {
    try {
      await connectDatabase();
      return await BookModel.find();
    } catch (error) {
      console.error('Failed to retrieve books:', error);
      throw error;
    }
  }

  async create(createRequest) {
    try {
      await connectDatabase();

      const book = new Book(createRequest)

      const bookModel = new BookModel(book);

      return await bookModel.save();
    } catch (error) {
      console.error('Failed to create book:', error);
      throw error;
    }
  }

  async update(id, updateRequest) {
    try {
      await connectDatabase();
      return await BookModel.findByIdAndUpdate(id, updateRequest, { new: true });
    } catch (error) {
      console.error('Failed to update book:', error);
      throw error;
    }
  }

  async delete(id) {
    try {
      await connectDatabase();
      return await BookModel.findByIdAndDelete(id);
    } catch (error) {
      console.error('Failed to delete book:', error);
      throw error;
    }
  }
}

module.exports = BookRepository;
