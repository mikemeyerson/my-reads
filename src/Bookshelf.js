import React, { Component } from 'react';
import Book from './Book.js';
import './Bookshelf.css';

const shelfNames = {
  currentlyReading: 'Currently Reading',
  wantToRead: 'Want to Read',
  read: 'Read'
};

class Bookshelf extends Component {

  render() {
    const { books, type } = this.props;

    let booksToDisplay = books;

    if (type) {
      booksToDisplay = books.filter((book) => book.shelf === type);
    }

    return (
      <section className="bookshelf">
        {type && (
          <h2 className="bookshelf-title">{shelfNames[type]}</h2>
        )}
        <div className="book-list">
          {booksToDisplay.map((book, index) => (
            <Book key={book.id} book={book} />
          ))}
        </div>
      </section>
    );
  }
}

export default Bookshelf;
