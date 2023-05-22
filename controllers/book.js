const BookService = require('../services/bookService');
const BookResponse = require('../responses/bookResponse');
const Response = require('../responses/response');
const CreateRequest = require('../requests/createRequest');
const UpdateRequest = require('../requests/updateRequest');

const bookService = new BookService();

const getAll = async (req, res, next) => {
  const books = await bookService.getAll();
  res.json(books.map(book => new BookResponse(book)));
}

const create = async (req, res, next) => {
  const bookRequest = new CreateRequest(req.body)
  const book = await bookService.create(bookRequest);
  res.json(new BookResponse(book));
}

const get = async (req, res, next) => {
  const id = req.params.id;
  const book = await bookService.getById(id);
  res.json(new Response(new BookResponse(book)));
}

const update = async (req, res, next) => {
  const bookRequest = new UpdateRequest(req.body)
  const id = req.params.id;
  const book = await bookService.update(id, bookRequest);
  res.json(new BookResponse(book));
}

const del = async (req, res, next) => {
  const id = req.params.id;

  try {
    await bookService.delete(id);

    res.status(200).json({ message: 'Deleted successfully' });
  } catch (error) {
    // Handle errors and send an appropriate response
    console.error('Failed to delete book:', error);
    res.status(500).json({ error: 'Failed to delete book' });
  }
};

module.exports = {
  getAll,
  create,
  update,
  get,
  del
}
