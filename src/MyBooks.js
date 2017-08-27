// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf.js';
import type { BookType, ShelfType } from './Types.js';
import './MyBooks.css';

type Props = {
  books: Array<BookType>,
  shelves: Array<ShelfType>,
  handleShelfChange: Function
};

const MyBooks = ({ books, shelves, handleShelfChange }: Props) => {

  const getBooksToDisplay = (shelfType) => books.filter((book) => book.shelf === shelfType);

  return (
    <div className="my-books">
      <div className="app-header">
        <h1>MyReads</h1>
      </div>
      {shelves.map((shelf) => (
        <Bookshelf
          key={shelf.name}
          name={shelf.name}
          shelves={shelves}
          books={getBooksToDisplay(shelf.type)}
          handleShelfChange={handleShelfChange}
        />
      ))}
      <Link to="/search" className="close-my-books">Search Books</Link>
    </div>
  );
}

export default MyBooks;
