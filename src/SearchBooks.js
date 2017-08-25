import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import Bookshelf from './Bookshelf.js';
import * as BooksAPI from './BooksAPI.js';


class SearchBooks extends Component {

	state = {
		query: '',
    searchResults: []
	};

  handleQueryChange = (event) => {
    const query = event.target.value.trim();

    this.setState({ query });
    this.debounced(query);
  };

  getSearchResults = (query) => {

    // TODO: Fix problem with quickly deleting query
    // if (!query) {
    //   this.debounced.cancel();
    //   this.setState({ searchResults: [] });
    //   console.info('yup');
    //   return;
    // }

    return BooksAPI.search(query).then((searchResults) => {
      this.setState({
        searchResults: _.isArray(searchResults) ? searchResults : [] });
    });
  };

  debounced = _.debounce(this.getSearchResults, 100);

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
