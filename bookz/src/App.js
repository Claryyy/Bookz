import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import Bookshelf from "./components/bookshelf";
import BookDetailsForm from "./components/form";
import AppendBook from "./components/append";
import FindSpecificBook from "./components/findbook";
import Button from "./components/button";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">Bookz</header>
        <h1>Welcome to Bookz</h1>
        <h3>The app where your books won't sleep on the self</h3>
        <h4>
          Track the books you have read so far and add new ones to your shelf!
        </h4>
        <Link to="/get_all_books">
          <Button label="View entire bookshelf"></Button>
        </Link>
        <Link to="/get_book">
          <Button label="Find a book"></Button>
        </Link>
        <Link to="/add_new_book">
          <Button label="Add new book"></Button>
        </Link>
        <Link to="/edit_book">
          <Button label="Edit bookshelf"></Button>
        </Link>

        <Switch>
          <Route path="/get_all_books" component={Bookshelf}></Route>
          <Route path="/get_book" component={FindSpecificBook}></Route>
          <Route path="/add_new_book" component={BookDetailsForm}></Route>
          <Route path="/edit_book" component={AppendBook}></Route>
          <Route path="/" exact></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
