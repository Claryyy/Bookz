let { books } = require("./data");

const getAllBooks = (req, res) => {
  res.status(200).json({ success: true, data: books });
};

const getBook = (req, res) => {
  const { id } = req.params;

  const book = books.find((book) => book.id === Number(id));

  if (!book) {
    return res
      .status(404)
      .json({ success: false, msg: `no book with id ${id}` });
  }

  res.status(200).json({ success: true, data: book });
};

const createBook = (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide title value" });
  }
  res.status(201).send({ success: true, book: title });
};

const updateBook = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const book = books.find((book) => book.id === Number(id));

  if (!book) {
    return res
      .status(404)
      .json({ success: false, msg: `no book with id ${id}` });
  }
  const newBooks = books.map((book) => {
    if (book.id === Number(id)) {
      book.title = title;
    }
    return book;
  });
  res.status(200).json({ success: true, data: newBooks });
};

const deleteBook = (req, res) => {
  const book = books.find((book) => book.id === Number(req.params.id));
  if (!book) {
    return res
      .status(404)
      .json({ success: false, msg: `no book with id ${req.params.id}` });
  }
  const newBooks = books.filter((book) => book.id !== Number(req.params.id));
  return res.status(200).json({ success: true, data: newBooks });
};

module.exports = {
  getAllBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
};
