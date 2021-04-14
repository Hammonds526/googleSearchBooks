import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

export function BookListItem({
  title,
  author,
  img,
  desc,
  link,
  id,
  handleSaveBook,
}) {
  return (
    <div className="card mx-2 mt-2">
      <div className="row">
        <div className="col-4">
          <h4 className="ml-4 mt-2">{title}</h4>
          <h5 className="ml-4">{author}</h5>
        </div>
        <div className="col-8">
          <div className="d-flex flex-row-reverse mt-2 mr-2">
            <Link to={{ pathname: link }} target="_blank">
              <button className="mr-1">View</button>
            </Link>
            <button onClick={() => handleSaveBook(id)}>Save</button>
          </div>
        </div>
      </div>
      <div className="row mt-2 mb-2">
        <div className="col-3">
          <img src={img} alt="Book Cover" className="ml-4 mb-2"></img>
        </div>
        <div className="col-8 mt-1 ml-2">
          <p>{desc}</p>
          <Link to={{ pathname: link }} target="_blank">
            You like book? Go to book.
          </Link>
        </div>
      </div>
    </div>
  );
}
