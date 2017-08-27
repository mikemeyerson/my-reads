// @flow
import React from 'react';
import Book from './Book.js';
import type { BookType, ShelfType } from './Types.js';
import './Bookshelf.css';

type Props = {
  books: Array<BookType>,
  name: string,
  shelves: Array<ShelfType>,
  handleShelfChange: Function
};

const Bookshelf = ({ books, name, shelves, handleShelfChange }: Props) => {
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
