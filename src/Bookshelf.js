import React, { Component } from 'react';
import Book from './Book.js';
import './Bookshelf.css';

class Bookshelf extends Component {

  render() {
    const { books, shelf, shelves, handleShelfChange } = this.props;

    let booksToDisplay = books;

    if (shelf.type) {
      booksToDisplay = books.filter((book) => book.shelf === shelf.type);
    }

    return (
      <section className="bookshelf">
        {shelf.name && (
          <h2 className="bookshelf-title">{shelf.name}</h2>
        )}
        <ol className="books-grid">
          {booksToDisplay.map((book, index) => (
            <Book key={book.id} book={book} shelves={shelves} handleShelfChange={handleShelfChange} />
          ))}
        </ol>
      </section>
    );
  }
}

export default Bookshelf;
