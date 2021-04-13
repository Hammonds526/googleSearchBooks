import React, { useEffect, useState } from "react";
import API from "../utils/API";
// import SearchBar from "../components/SearchBar";
import {BookList, BookListItem} from "../components/BookList";
import "bootstrap/dist/css/bootstrap.min.css";

function Search() {
  const [search, setSearch] = useState([]);
  const [books, setBooks] = useState([]);

  console.log(books)

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearch(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    API(search)
      .then((res) => setBooks(res.data.items))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
        {/* <SearchBar onClick={handleSubmit} onChange={handleInputChange}/> */}
      <div className="card">
        <div className="card-body">
          <h1 className="card-text">Book Search</h1>
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
        {books.map(book => {
            return (
                <BookListItem
                key={book.volumeInfo.title}
                title={book.volumeInfo.title}
                author={book.volumeInfo.authors}
                img={book.volumeInfo.imageLinks.thumbnail}
                desc={book.volumeInfo.description}
                link={book.volumeInfo.infoLink}
                />
            )
        })}
    </BookList>
        </div>
    </div>
  );
}

export default Search;
