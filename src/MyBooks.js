import React from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf.js';
import './MyBooks.css';

const MyBooks = ({ books, shelves, handleShelfChange }) => {

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
