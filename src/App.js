// @flow
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI.js';
import MyBooks from './MyBooks.js';
import SearchBooks from './SearchBooks.js';
import type { BookType, ShelfType } from './Types.js';
import './App.css';

type State = {
  books: Array<BookType>,
  shelves: Array<ShelfType>
};

// TODO: any other way to store shelves? books array in each shelf?
// TODO: tests
class BooksApp extends Component<{}, State> {
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
    BooksAPI.getAll().then((books: Array<BookType>) => {
      this.setState({ books });
    });
  }

  handleShelfChange = (book: BookType, { target } : { target: HTMLInputElement }) => {
    const newShelf = target.value;

    BooksAPI.update(book, newShelf).then(() => {
      const unchangedBooks: Array<BookType> = this.state.books.filter(b => b.id !== book.id);
      this.setState({ books: unchangedBooks.concat({...book, shelf: newShelf})});
    });
  };

  render() {
    const { books, shelves } = this.state;

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <MyBooks
            books={books}
            shelves={shelves}
            handleShelfChange={this.handleShelfChange}
          />
        )}/>
        <Route path="/search" render={({ history }) => (
          <SearchBooks
            books={books}
            shelves={shelves}
            handleShelfChange={(book: BookType, { target }: { target: HTMLInputElement }) => {
              history.push('/');
              this.handleShelfChange(book, { target });
            }}
          />
        )}/>
      </div>
    );
  }
}

export default BooksApp;
