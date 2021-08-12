import React from "react";
import { useState, useEffect } from "react";
import { Link, useRouteMatch, useParams } from "react-router-dom";
import "./styles.css";
import Button from "../button";
import EditBook from "../edit";

function Bookshelf() {
  let match = useRouteMatch();
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
  }, []);

  return (
    <div className="bookshelf">
      <h1 className="title">Bookshelf</h1>
      <h3 className="sub-text">
        Find all the books you have read and added to your bookshelf so far{" "}
      </h3>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Year Published</th>
            <th>Rating</th>
            <th>Year Read</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
              <td>{book.yearPublished}</td>
              <td>{book.rating}</td>
              <td>{book.yearRead}</td>
              <td>
                <Link to={`/edit_book/${book._id}`}>Edit</Link>

                {/* <button
                  className="btn btn-primary"
                  onClick={() => <EditBook id={book._id} />}
                >
                  Edit
                </button> */}
              </td>
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
