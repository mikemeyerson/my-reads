import React, { Component } from 'react';
import './Book.css';

class Book extends Component {

  render() {
    const { book, shelves, handleShelfChange } = this.props;

    return (
      <li className="book-wrapper">
        <div className="book">
          <div className="book-cover">
            <img src={book.imageLinks.thumbnail} alt={book.title} />
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-author">{book.authors.join(', ')}</div>
          <select className="shelf-dropdown" value={book.shelf} onChange={(event) => handleShelfChange(book, event)}>
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
}

export default Book;
