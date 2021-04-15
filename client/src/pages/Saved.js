import React, { useEffect, useState, useCallback } from "react";
import { getBooks, deleteBook } from "../utils/API";

// import SearchBar from "../components/SearchBar";
import { SaveList, SaveListItem } from "../components/SaveList";
import "bootstrap/dist/css/bootstrap.min.css";
function Save() {
  const [myBooks, setMyBooks] = useState([]);
  console.log(myBooks);

  const handleDeleteBook = (id) => {
    deleteBook(id).then(() => {
      runGetBooks();
    });
    //Todo call api to delete a book, then render getbooks.
  };

  const runGetBooks = () =>
    getBooks()
      .then((res) => {
        setMyBooks(res.data);
      })
      .catch((err) => console.log());

  // Get books to populate the page
  useEffect(() => {
    runGetBooks();
  }, []);

  return (
    <div className="container">
      <div className="card mt-3">
        <h3 className="ml-3">Results</h3>
        <SaveList>
          {myBooks.map((book, i) => {
            return (
              <SaveListItem
                key={i}
                title={book.title}
                author={book.authors}
                img={book.img ? book.img : null}
                desc={book.desc}
                link={book.link}
                id={book._id}
                handleDeleteBook={handleDeleteBook}
              />
            );
          })}
        </SaveList>
      </div>
    </div>
  );
}
export default Save;
