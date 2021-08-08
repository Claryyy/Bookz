import React from "react";
// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Button from "../button";

function AppendBook() {
  return (
    <div className="edit">
      <h1 className="title">Modify your bookshelf</h1>
      <h3 className="sub-text">
        Find all the books you have read and added to your bookshelf so far.
        Please chose the action you want to do.{" "}
      </h3>
      <table></table>
      <Link to="/edit_book">
        <Button label="Edit" className="btn" />
      </Link>
      <Link to="/delete_book">
        <Button label="Delete" className="btn" />
      </Link>
    </div>
  );
}

export default AppendBook;
