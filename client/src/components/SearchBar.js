import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function SearchBar(props) {
  return (
    <div className="card">
      <div className="card-body">
        <h1 className="card-text">Book Search</h1>
        <div className="input-group m-3">
          <input
            type="text"
            className="form-control"
            placeholder="Book Name Here"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
             onChange={props}
          ></input>
          <div className="input-group-append">
            <button onClick={props} className="btn btn-outline-secondary mr-3" type="Search">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
