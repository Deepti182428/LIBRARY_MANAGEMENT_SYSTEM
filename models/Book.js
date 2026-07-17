const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    author: {
      type: String,
      required: [true, 'Author is required'],
      trim: true,
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      trim: true,
    },
    isbn: {
      type: String,
      required: [true, 'ISBN is required'],
      unique: true,
      trim: true,
    },
    availableCopies: {
      type: Number,
      required: [true, 'Available copies are required'],
      min: [0, 'Available copies cannot be negative'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Book', bookSchema);
