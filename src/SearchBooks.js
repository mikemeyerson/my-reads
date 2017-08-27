import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import * as BooksAPI from './BooksAPI.js';
import Bookshelf from './Bookshelf.js';
import './SearchBooks.css';



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
        <div className="search-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={this.handleQueryChange}
            />
          </div>
        </div>
        <div className="search-results">
          <Bookshelf
            name={searchResults.length ? "Search Results" : ''}
            shelves={shelves}
            books={searchResults}
            handleShelfChange={handleShelfChange}
          />
        </div>
      </div>
    );
  }
}

export default SearchBooks;
