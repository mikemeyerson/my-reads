import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf.js';
import * as BooksAPI from './BooksAPI.js';


class SearchBooks extends Component {

	state = {
		query: '',
    searchResults: []
	};

  handleQueryChange = (event) => {
    const query = event.target.value.trim();

    BooksAPI.search(query).then((books) => {
      console.info(books);
      this.setState({ query, searchResults: books });
    });
  };

  render() {
    const { books, shelves, handleShelfChange } = this.props;
    const { query, searchResults } = this.state;

    books.forEach((book) => {
      searchResults.forEach((searchResult) => {
        if (book.id === searchResult.id) {
          searchResult.shelf = book.shelf;
        }
      });
    });

    return (
      <div className="search-books">
        <div className="search-header">
          <Link to="/" className="back-button">Back</Link>
          <form className="search-form">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={this.handleQueryChange}
            />
          </form>
        </div>
        <Bookshelf books={searchResults} shelves={shelves} handleShelfChange={handleShelfChange} />
      </div>
    );
  }
}

export default SearchBooks;
