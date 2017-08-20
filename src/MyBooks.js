import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf.js';

const shelves = [
  'currentlyReading',
  'wantToRead',
  'read'
];

class MyBooks extends Component {

  render() {
    const { books } = this.props;

    return (
      <div className="my-books">
        <div className="app-header">
          <h1>MyReads</h1>
        </div>
        {shelves.map((shelf) => (
          <Bookshelf key={shelf} type={shelf} books={books} />
        ))}
        <Link to="/search" className="search-book-button">Search Books</Link>
      </div>
    );
  }
}

export default MyBooks;
