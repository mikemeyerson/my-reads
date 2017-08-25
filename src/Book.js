import React from 'react';
import './Book.css';

const Book = ({book, shelves, handleShelfChange}) => {
  return (
    <li className="book-wrapper">
      <div className="book">
        <div className="book-cover">
          <img src={book.imageLinks.thumbnail} alt={book.title} />
        </div>
        {book.title && <div className="book-title">{book.title}</div>}
        {book.authors && <div className="book-author">{book.authors.join(', ')}</div>}
        <select className="shelf-dropdown" value={book.shelf || 'none'} onChange={(event) => handleShelfChange(book, event)}>
          <option value="none" disabled>Move to...</option>
          {shelves.map(shelf => (
            <option key={shelf.name} value={shelf.type}>
              {shelf.name}
            </option>
          ))}
        </select>
      </div>
    </li>
  );
};

export default Book;
