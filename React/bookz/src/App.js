import React from "react";
import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import Bookshelf from "./components/bookshelf";
import BookDetailsForm from "./components/form";
import EditBook from "./components/edit";
import FindSpecificBook from "./components/findbook";
import Button from "./components/button";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Bookz</h1>
          <h4>The app where your books won't sleep on the shelf</h4>
          <p>
            Track the books you have read so far and add new ones to your shelf!
          </p>
        </header>

        <div className="button-container">
          <Link to="/">
            <Button label="View entire bookshelf"></Button>
          </Link>
          <Link to="/get_book">
            <Button label="Find a book"></Button>
          </Link>
          <Link to="/add_new_book">
            <Button label="Add new book"></Button>
          </Link>
          {/* <Link to="/edit_book">
            <Button label="Edit bookshelf"></Button>
          </Link> */}
        </div>

        <Switch>
          <Route exact path="/" component={Bookshelf}></Route>
          <Route path="/get_book" component={FindSpecificBook}></Route>
          <Route path="/add_new_book" component={BookDetailsForm}></Route>
          <Route path="/edit_book/:bookId" component={EditBook}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
