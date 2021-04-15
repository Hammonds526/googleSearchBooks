import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
export function SaveList({ children }) {
  return <ul className="list-group">{children}</ul>;
}
export function SaveListItem({
  title,
  author,
  img,
  desc,
  link,
  id,
  handleDeleteBook,
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
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={() => handleDeleteBook(id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <div className="row mt-2 mb-2">
        <div className="col-3">
          {img ? (
            <img src={img} alt="Book Cover" className="ml-4 mb-2"></img>
          ) : null}
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
