let { books } = require("./data");
const mongodb = require("mongodb");
const { ObjectID } = require("bson");
// URI should ideally be injected via an environment variable
// You should never check in things such as connection strings into source
// control
const uri = "mongodb://localhost:27017";
const client = new mongodb.MongoClient(uri);

async function retrieveBooksCollection() {
  // first connect to the box where our mongo instance lives
  await client.connect();

  // next get the actual database (mongo boxes can have multiple)
  const database = client.db("Bookz");

  // next get the collection (table) in our database that contains our books
  const booksCollection = database.collection("books");
  return booksCollection;
}

async function closeConnectionToDatabase() {
  await client.close();
}

const getAllBooks = async (req, res) => {
  const booksCollection = await retrieveBooksCollection();
  const allData = await booksCollection.find().toArray();
  closeConnectionToDatabase();

  res.status(200).json({ success: true, data: allData });
};

const getBook = async (req, res) => {
  const { id } = req.params;

  const booksCollection = await retrieveBooksCollection();
  const query = { _id: ObjectID(id) };
  const book = await booksCollection.findOne(query);
  closeConnectionToDatabase();

  if (!book) {
    return res
      .status(404)
      .json({ success: false, msg: `no book with id ${id}` });
  }

  res.status(200).json({ success: true, data: book });
};

const createBook = async (req, res) => {
  const book = req.body;

  console.log("body for post is: " + book);

  if (
    !book.title ||
    !book.author ||
    !book.genre ||
    !book.yearPublished ||
    !book.rating
  ) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide a valid body for a book" });
  }

  console.log("passed validation checks, inserting into DB");

  const booksCollection = await retrieveBooksCollection();
  const result = await booksCollection.insertOne(book);
  closeConnectionToDatabase();
  console.log("inserted into DB");

  if (!result.insertedId) {
    return res
      .status(400)
      .json({ success: false, msg: "Insert failed for some reason" });
  }

  res.status(201).send({ success: true, book: book });
};

const updateBook = async (req, res) => {
  const { id } = req.params;
  const book = req.body;

  if (
    !book.title ||
    !book.author ||
    !book.genre ||
    !book.yearPublished ||
    !book.rating
  ) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide a valid body for a book" });
  }

  const booksCollection = await retrieveBooksCollection();
  const query = { _id: ObjectID(id) };
  const updateResult = await booksCollection.replaceOne(query, book);
  closeConnectionToDatabase();

  if (updateResult.modifiedCount === 1) {
    res.status(200).json({ success: true, data: book });
  } else {
    return res
      .status(400)
      .json({ success: false, msg: "Update did not work correctly" });
  }
};

const deleteBook = async (req, res) => {
  const booksCollection = await retrieveBooksCollection();
  const query = { _id: ObjectID(req.params.id) };
  const result = await booksCollection.deleteOne(query);
  closeConnectionToDatabase();

  if (result.deletedCount === 1) {
    return res.status(200).json({ success: true });
  } else {
    return res.status(404).json({
      success: false,
      msg: `Something went wrong when deleting the book`,
    });
  }
};

module.exports = {
  getAllBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
};
