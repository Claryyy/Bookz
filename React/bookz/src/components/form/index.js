import React from "react";
import { useState } from "react";
import "./styles.css";

function BookDetailsForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [yearPublished, setYearPublished] = useState(0);
  const [rating, setRating] = useState(0);
  const [yearRead, setYearRead] = useState(0);

  async function createBook(props) {
    let book = {
      title: title,
      author: author,
      genre: genre,
      yearPublished: yearPublished,
      rating: rating,
      yearRead: yearRead,
    };

    await fetch(`http://localhost:5000/api/books/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    })
      .then((res) => {
        if (res.status !== 200) {
          alert("There was a problem creating the book, please try again");
        }
        console.log("props is: " + props);
        // TO DO this redirect isn't working
        props.history.push("/get_book");
      })
      .catch(console.log);
  }

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
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <label for="author">Author:</label>
        <input
          type="text"
          variant="filled"
          id="author"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        ></input>
        <label for="genre">Genre:</label>
        <input
          type="text"
          variant="filled"
          id="genre"
          required
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        ></input>
        <label for="published">Year published:</label>
        <input
          type="text"
          variant="filled"
          id="published"
          required
          value={yearPublished}
          onChange={(e) => setYearPublished(e.target.value)}
        ></input>
        <label for="rating">Rating (out of 5):</label>
        <input
          type="text"
          variant="filled"
          id="rating"
          required
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        ></input>
        <label for="read">Year read:</label>
        <input
          type="text"
          variant="filled"
          id="read"
          required
          value={yearRead}
          onChange={(e) => setYearRead(e.target.value)}
        ></input>
        <button className="btn btn-primary" onClick={createBook}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default BookDetailsForm;
