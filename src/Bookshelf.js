import React from 'react';
import Book from './Book.js';
import './Bookshelf.css';

const Bookshelf = ({ books, shelf, shelves, handleShelfChange }) => {
  let booksToDisplay = books;

  if (shelf && shelf.type) {
    booksToDisplay = books.filter((book) => book.shelf === shelf.type);
  }

  return (
    <section className="bookshelf">
      {shelf && shelf.name && (
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

export default Bookshelf;
