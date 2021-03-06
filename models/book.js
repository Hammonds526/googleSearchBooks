const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  authors: { type: Array },
  desc: { type: String },
  img: { type: String },
  link: { type: String },
  title: { type: String },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
