import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MyBooks from './MyBooks.js';
import SearchBooks from './SearchBooks.js';
import * as BooksAPI from './BooksAPI.js';
import './App.css';


// TODO: try PropTypes
class BooksApp extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      console.info(books);
      this.setState({ books });
    });
  }

  render() {
    const { books } = this.state;

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <MyBooks books={books} />
        )}/>
        {/*TODO: use history.push here? find out why*/}
        <Route path="/search" render={() =>(
          <SearchBooks books={books} />
        )}/>
      </div>
    );
  }
}

export default BooksApp;
