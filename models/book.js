const mongoose = require('mongoose');

const { CounterModel } = require('./counter');

const bookSchema = new mongoose.Schema({
  _id: { type: Number },
  name: { type: String, required: true },
  author: { type: String, required: true },
});

bookSchema.pre('save', async function (next) {
  const book = this;
  try {
    const counter = await CounterModel.findByIdAndUpdate(
      'books',
      { $inc: { sequenceValue: 1 } },
      { new: true, upsert: true }
    );
    book._id = counter.sequenceValue;
    next();
  } catch (error) {
    console.error('Failed to generate book ID:', error);
    throw error;
  }
});

const BookModel = mongoose.model('Book', bookSchema);

class Book {
  constructor(createRequest) {
    this._id = createRequest.id; // Assuming CreateRequest has an `id` property
    this.name = createRequest.name;
    this.author = createRequest.author;
  }
}

module.exports = {
  BookModel,
  Book,
};
