import React from 'react';
import Book from './Book.js';
import './Bookshelf.css';

const Bookshelf = ({ books, name, shelves, handleShelfChange }) => {
  return (
    <section className="bookshelf">
      {name && <h2 className="bookshelf-title">{name}</h2>}
      <ol className="books-grid">
        {books.map((book, index) => (
          <Book
            key={book.id}
            book={book}
            shelves={shelves}
            handleShelfChange={handleShelfChange}
          />
        ))}
      </ol>
    </section>
  );
}

export default Bookshelf;
