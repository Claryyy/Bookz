const express = require("express");
const router = express.Router();

const {
  getBook,
  getAllBooks,
  createBook,
  updateBook,
  deleteBook,
} = require("./controller");

router.route("/getAllBooks").get(getAllBooks);
router.route("/").post(createBook);
router.route("/:id").get(getBook).put(updateBook).delete(deleteBook);

module.exports = router;
