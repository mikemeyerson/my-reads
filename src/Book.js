import React, { Component } from 'react';
import './Book.css';

class Book extends Component {

  render() {
    const { book } = this.props;

    return (
      <li className="book-wrapper">
        <div className="book">
          <div className="book-cover">
            <img src={book.imageLinks.thumbnail} alt={book.title} />
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-author">{book.authors.join(', ')}</div>
        </div>
      </li>
    );
  };
}

export default Book;
