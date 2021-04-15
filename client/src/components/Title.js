import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Title() {
  return (
    <div className="container mt-2">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="font-weight-bold display-4">Book Search</h1>
          <p className="lead font-weight-bold">
            Search for and Save Books of Interest
          </p>
        </div>
      </div>
    </div>
  );
}

export default Title;
