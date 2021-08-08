import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Button from "../button";

function Bookshelf() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    let mounted = true;
    fetch("http://localhost:5000/api/books/getAllBooks")
      .then((res) => res.json())
      .then((data) => {
        if (mounted) {
          setBooks(data);
        }
      })
      .catch(console.log);
    return () => (mounted = false);
  });

  return (
    <div className="bookshelf">
      <h1 className="title">Bookshelf</h1>
      <h3 className="sub-text">
        Find all the books you have read and added to your bookshelf so far{" "}
      </h3>
      <table class="table">
        <thead>
          <tr>
            <th>Title</th>

            <th>Author</th>
            <th>Genre</th>
            <th>Year Published</th>
            <th>Rating</th>
            <th>Year Read</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
              <td>{book.yearPublished}</td>
              <td>{book.rating}</td>
              <td>{book.yearRead}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <Link to="/get_all_books">
        <Button label="Submit" className="btn" />
      </Link> */}
    </div>
  );
}

export default Bookshelf;
