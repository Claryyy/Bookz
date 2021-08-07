import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Button from "../button";

function FindSpecificBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [yearPublished, setYearPublished] = useState(0);
  const [rating, setRating] = useState(0);
  const [yearRead, setYearRead] = useState(0);

  //   useEffect(() => {
  //     createBook();
  //   });

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     createBook();
  //   };

  // form onSubmit={handleSubmit}

  return (
    <div className="body">
      <h1 className="title">Book's info</h1>
      <h3 className="sub-text">Please add the book's info in the form below</h3>
      <form>
        <div className="input-field">
          (
          <input
            label="Title"
            type="text"
            variant="filled"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          ), (
          <input
            label="Author"
            type="text"
            variant="filled"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          ></input>
          ), (
          <input
            label="Genre"
            type="text"
            variant="filled"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          ></input>
          ), (
          <input
            label="Year Published"
            type="text"
            variant="filled"
            value={yearPublished}
            onChange={(e) => setYearPublished(e.target.value)}
          ></input>
          ), (
          <input
            label="Rating (out of 5)"
            type="text"
            variant="filled"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          ></input>
          ), (
          <input
            label="Year Read"
            type="text"
            variant="filled"
            value={yearRead}
            onChange={(e) => setYearRead(e.target.value)}
          ></input>
          ),
        </div>
      </form>
      <Link to="/get_book">
        <Button label="Submit" className="btn" />
      </Link>
    </div>
  );
}

export default FindSpecificBook;
