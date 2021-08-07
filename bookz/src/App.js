import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import BookDetailsForm from "./components/form";
import Button from "./components/button";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/add_new_book" component={BookDetailsForm}></Route>
          <header className="App-header">Bookz</header>
          <h1>Welcome to Bookz</h1>
          <h3>The app where your books won't sleep on the self</h3>
          <h4>
            Track the books you have read so far and add new ones to your shelf!
          </h4>
          <Link to="/add_new_book">
            <Button label="Add new book"></Button>
          </Link>
          <Route path="/" exact></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
