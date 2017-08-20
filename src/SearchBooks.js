import React, { Component } from 'react';
import Bookshelf from './Bookshelf.js';

class SearchBooks extends Component {

  render() {
    const { books } = this.props;

    return (
      <div className="search-books">
        <Bookshelf books={books} />
      </div>
    );
  }
}

export default SearchBooks;
