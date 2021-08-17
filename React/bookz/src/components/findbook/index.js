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

  return (
    <div className="body">
      <h1 className="title">Book's info</h1>
      <h3 className="sub-text">Please add the book's info in the form below</h3>
      <form className="input-field container">
        <label for="title">Title:</label>
        <input
          type="text"
          variant="filled"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <label for="author">Author:</label>
        <input
          type="text"
          variant="filled"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        ></input>
        <label for="genre">Genre:</label>
        <input
          type="text"
          variant="filled"
          id="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        ></input>
        <label for="published">Year published:</label>
        <input
          type="text"
          variant="filled"
          id="published"
          value={yearPublished}
          onChange={(e) => setYearPublished(e.target.value)}
        ></input>
        <label for="rating">Rating (out of 5):</label>
        <input
          type="text"
          variant="filled"
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        ></input>
        <label for="read">Year read:</label>
        <input
          type="text"
          variant="filled"
          id="read"
          value={yearRead}
          onChange={(e) => setYearRead(e.target.value)}
        ></input>
        <Link to="/get_book">
          <Button label="Submit" className="btn" />
        </Link>
      </form>
    </div>
  );
}

export default FindSpecificBook;
