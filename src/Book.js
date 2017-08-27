import React from 'react';
import './Book.css';

const Book = ({ book, shelves, handleShelfChange }) => {

  const hasCover = book.imageLinks && book.imageLinks.thumbnail;

  return (
    <li className="book-wrapper">
      <div className="book">
        <div className={`book-cover ${hasCover ? '' : 'no-cover'}`}>
          {book.imageLinks && book.imageLinks.thumbnail && (
              <img src={book.imageLinks.thumbnail} alt={book.title} />
          )}
          <div className="change-shelf">
            <select value={book.shelf || 'none'} onChange={(event) => handleShelfChange(book, event)}>
              <option value="" disabled>Move to...</option>
              {shelves.map(shelf => (
                <option key={shelf.name} value={shelf.type}>
                  {shelf.name}
                </option>
              ))}
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title || ''}</div>
        <div className="book-author">{book.authors ? book.authors.join(', ') : 'Unknown'}</div>
      </div>
    </li>
  );
};

export default Book;
