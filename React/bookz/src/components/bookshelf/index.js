import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import "./styles.css";

function Bookshelf() {
  const [currentBookId, setCurrentBookId] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [books, setBooks] = useState([]);

  async function getAllBooks() {
    await fetch("http://localhost:5000/api/books/getAllBooks")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      })
      .catch(console.log);
  }

  async function deleteBook(bookId) {
    setShow(false);
    await fetch(`http://localhost:5000/api/books/${bookId}`, {
      method: "DELETE",
    });
    await getAllBooks();
  }

  useEffect(() => {
    getAllBooks();
    return () => ({});
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
            <th>Delete</th>
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
                <Link to={`/edit_book/${book._id}`} className="btn btn-primary">
                  Edit
                </Link>
              </td>
              <td>
                <Button
                  variant="primary"
                  onClick={() => {
                    setCurrentBookId(book._id);
                    handleShow();
                  }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Delete this book?</Modal.Title>
        </Modal.Header>
        <Modal.Body> Are you sure you want to delete this book?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              deleteBook(currentBookId);
            }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Bookshelf;
