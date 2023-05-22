class BookResponse {
  constructor(bookModel) {
    this.id = bookModel._id;
    this.name = bookModel.name;
    this.author = bookModel.author;
  }
}

module.exports = BookResponse;
