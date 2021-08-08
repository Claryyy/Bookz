import React from "react";
// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Button from "../button";

function Bookshelf() {
  return (
    <div className="bookshelf">
      <h1 className="title">Bookshelf</h1>
      <h3 className="sub-text">
        Find all the books you have read and added to your bookshelf so far{" "}
      </h3>
      <table></table>
      {/* <Link to="/get_all_books">
        <Button label="Submit" className="btn" />
      </Link> */}
    </div>
  );
}

export default Bookshelf;
