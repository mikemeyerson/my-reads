import React, { Component } from 'react';
import './Book.css';

class Book extends Component {

  render() {
    const { book } = this.props;

    return (
      <div className="book">
        <img src={book.imageLinks.thumbnail} alt={book.title} />
        <p className="book-title">{book.title}</p>
        <p className="book-author">{book.authors.join(', ')}</p>
      </div>
    );
  };
}

export default Book;
