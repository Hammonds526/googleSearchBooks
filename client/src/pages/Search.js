import React, { useEffect, useState, useCallback } from "react";
import { get, saveBook } from "../utils/API";
// import SearchBar from "../components/SearchBar";
import { BookList, BookListItem } from "../components/BookList";
import "bootstrap/dist/css/bootstrap.min.css";

function Search() {
  const [search, setSearch] = useState([]);
  const [books, setBooks] = useState([]);

  console.log(books);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearch(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    get(search)
      .then((res) => setBooks(res.data.items))
      .catch((err) => console.log(err));
  };

  const handleSaveBook = (id) => {
    const book = {};
    book.authors = books[id].volumeInfo.authors;
    book.title = books[id].volumeInfo.title;
    book.img = books[id].volumeInfo.imageLinks.thumbnail;
    book.desc = books[id].volumeInfo.description;
    book.link = books[id].volumeInfo.infoLink;

    saveBook(book);
    console.log("book ", book);
  };

  return (
    <div className="container">
      {/* <SearchBar onClick={handleSubmit} onChange={handleInputChange}/> */}
      <div className="card">
        <div className="card-body">
          <h2 className="card-text">Find a book to save!</h2>
          <div className="input-group m-3">
            <input
              type="text"
              className="form-control"
              placeholder="Book Name Here"
              aria-describedby="basic-addon2"
              onChange={handleInputChange}
            ></input>
            <div className="input-group-append">
              <button
                onClick={handleSubmit}
                className="btn btn-outline-secondary mr-3"
                type="Search"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="card mt-3">
        <h3 className="ml-3">Results</h3>
        <BookList>
          {books.map((book, i) => {
            return (
              <BookListItem
                key={i}
                title={book.volumeInfo.title}
                author={book.volumeInfo.authors}
                img={
                  book.volumeInfo.imageLinks
                    ? book.volumeInfo.imageLinks.thumbnail
                    : null
                }
                desc={book.volumeInfo.description}
                link={book.volumeInfo.infoLink}
                id={i}
                handleSaveBook={handleSaveBook}
              />
            );
          })}
        </BookList>
      </div>
    </div>
  );
}

export default Search;
