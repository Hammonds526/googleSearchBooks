import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Title() {
  return (
    <div className="container mt-2">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">(React) Google Books Search</h1>
          <p className="lead">Search for and Save Books of Interest</p>
        </div>
      </div>
    </div>
  );
}

export default Title;
