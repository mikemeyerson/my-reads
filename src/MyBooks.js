import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf.js';

class MyBooks extends Component {

  render() {
    const { books, shelves, handleShelfChange } = this.props;

    console.info(shelves);

    return (
      <div className="my-books">
        <div className="app-header">
          <h1>MyReads</h1>
        </div>
        {shelves.map((shelf) => (
          <Bookshelf
            key={shelf.name}
            shelf={shelf}
            shelves={shelves}
            books={books}
            handleShelfChange={handleShelfChange}
          />
        ))}
        <Link to="/search" className="search-book-button">Search Books</Link>
      </div>
    );
  }
}

export default MyBooks;
