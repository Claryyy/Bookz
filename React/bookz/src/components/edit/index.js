import React from "react";
import { useState, useEffect } from "react";
import { useRouteMatch, useParams } from "react-router-dom";
import "./styles.css";
import Button from "../button";

function EditBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [yearPublished, setYearPublished] = useState(0);
  const [rating, setRating] = useState(0);
  const [yearRead, setYearRead] = useState(0);
  let { bookId } = useParams();

  async function updateBook() {
    console.log("This is the updateBook function happening");

    let book = {
      title: title,
      author: author,
      genre: genre,
      yearPublished: yearPublished,
      rating: rating,
      yearRead: yearRead,
    };

    fetch(`http://localhost:5000/api/books/${bookId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    })
      .then((res) => {
        if (res.status !== 200) {
          alert("There was a problem updating the book, please try again");
        }
      })
      .catch(console.log);
  }

  useEffect(() => {
    let mounted = true;

    fetch(`http://localhost:5000/api/books/${bookId}`)
      .then((res) => res.json())
      .then((data) => {
        if (mounted) {
          setTitle(data.title);
          setAuthor(data.author);
          setGenre(data.genre);
          setYearPublished(data.yearPublished);
          setRating(data.rating);
          setYearRead(data.yearRead);
        }
      })
      .catch(console.log);
    return () => (mounted = false);
  }, [bookId]);

  return (
    <div className="edit-book">
      <h1 className="title">Book's info</h1>
      <h3 className="sub-text">
        Please edit the book's info in the form below
      </h3>
      <form className="input-field container">
        <label>Title:</label>
        <input
          type="text"
          variant="filled"
          id="title"
          required
          placeholder="Enter the updated book's title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <label>Author:</label>
        <input
          type="text"
          variant="filled"
          id="author"
          required
          placeholder="Enter the updated book's author here"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        ></input>
        <label for="genre">Genre:</label>
        <input
          type="text"
          variant="filled"
          id="genre"
          required
          placeholder="Enter the updated book's genre here"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        ></input>
        <label for="published">Year published:</label>
        <input
          type="text"
          variant="filled"
          id="published"
          required
          placeholder="Enter the updated book's year of publication here"
          value={yearPublished}
          onChange={(e) => setYearPublished(e.target.value)}
        ></input>
        <label for="rating">Rating (out of 5):</label>
        <input
          type="text"
          variant="filled"
          id="rating"
          required
          placeholder="Enter the updated book's rating here"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        ></input>
        <label for="read">Year read:</label>
        <input
          type="text"
          variant="filled"
          id="read"
          required
          placeholder="Enter the updated book's year of reading here"
          value={yearRead}
          onChange={(e) => setYearRead(e.target.value)}
        ></input>
        {/* <Button label="Submit" className="btn" onClick={(e) => updateBook()} /> */}
        <button className="btn btn-primary" onClick={updateBook}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditBook;
