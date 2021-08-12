import React from "react";
import { useState, useEffect } from "react";
import { useRouteMatch, useParams } from "react-router-dom";
import "./styles.css";
import Button from "../button";

function EditBook() {
  const [book, setBook] = useState({});
  let { bookId } = useParams();

  async function updateBook() {
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
          setBook(data);
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
        <label for="title">Title:</label>
        <input
          type="text"
          variant="filled"
          id="title"
          required
          placeholder="Enter the updated book's title here"
          value={book.title}
          onChange={(e) => (book.title = e.value)}
        ></input>
        <label for="author">Author:</label>
        <input
          type="text"
          variant="filled"
          id="author"
          required
          placeholder="Enter the updated book's author here"
          value={book.author}
          onChange={(e) => (book.author = e.value)}
        ></input>
        <label for="genre">Genre:</label>
        <input
          type="text"
          variant="filled"
          id="genre"
          required
          placeholder="Enter the updated book's genre here"
          value={book.genre}
          onChange={(e) => (book.genre = e.value)}
        ></input>
        <label for="published">Year published:</label>
        <input
          type="text"
          variant="filled"
          id="published"
          required
          placeholder="Enter the updated book's year of publication here"
          value={book.yearPublished}
          onChange={(e) => (book.yearPublished = e.value)}
        ></input>
        <label for="rating">Rating (out of 5):</label>
        <input
          type="text"
          variant="filled"
          id="rating"
          required
          placeholder="Enter the updated book's rating here"
          value={book.rating}
          onChange={(e) => (book.rating = e.value)}
        ></input>
        <label for="read">Year read:</label>
        <input
          type="text"
          variant="filled"
          id="read"
          required
          placeholder="Enter the updated book's year of reading here"
          value={book.yearRead}
          onChange={(e) => (book.yearRead = e.value)}
        ></input>
        <Button label="Submit" className="btn" onClick={updateBook} />
      </form>
    </div>
  );
}

export default EditBook;
