const BookRepository = require('../repositories/bookRepository');
const CreateRequest = require('../requests/createRequest');

class BookService {
  constructor() {
    this.bookRepository = new BookRepository();
  }

  async create(bookRequest) {
    try {
      const savedBook = await this.bookRepository.create(bookRequest);
      return savedBook;
    } catch (error) {
      console.error('Failed to create book:', error);
      throw error;
    }
  }

  async getById(id) {
    try {
      return await this.bookRepository.findById(id);
    } catch (error) {
      console.error('Failed to get book by ID:', error);
      throw error;
    }
  }

  async getAll() {
    try {
      return await this.bookRepository.findAll();
    } catch (error) {
      console.error('Failed to get books:', error);
      throw error;
    }
  }

  async update(id, updateRequest) {
    try {
      return await this.bookRepository.update(id, updateRequest);
    } catch (error) {
      console.error('Failed to update book:', error);
      throw error;
    }
  }

  async delete(id) {
    try {
      return await this.bookRepository.delete(id);
    } catch (error) {
      console.error('Failed to delete book:', error);
      throw error;
    }
  }
}

module.exports = BookService;
