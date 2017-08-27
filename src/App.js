import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MyBooks from './MyBooks.js';
import SearchBooks from './SearchBooks.js';
import * as BooksAPI from './BooksAPI.js';
import './App.css';


// TODO: try PropTypes
// TODO: history.push?
// TODO: any other way to store shelves? books array in each shelf?
// TODO: tests
class BooksApp extends Component {
  state = {
    books: [],
    shelves: [
      {
        name: 'Currently Reading',
        type: 'currentlyReading'
      }, {
        name: 'Want to Read',
        type: 'wantToRead'
      }, {
        name: 'Read',
        type: 'read'
      }
    ]
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }

  handleShelfChange = (book, event) => {
    const newShelf = event.target.value;

    BooksAPI.update(book, newShelf).then((response) => {
      const unchangedBooks = this.state.books.filter(b => b.id !== book.id);
      this.setState({ books: unchangedBooks.concat({...book, shelf: newShelf})});
    })
  };

  render() {
    const { books, shelves } = this.state;

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <MyBooks books={books} shelves={shelves} handleShelfChange={this.handleShelfChange} />
        )}/>
        <Route path="/search" render={() =>(
          <SearchBooks books={books} shelves={shelves} handleShelfChange={this.handleShelfChange} />
        )}/>
      </div>
    );
  }
}

export default BooksApp;
