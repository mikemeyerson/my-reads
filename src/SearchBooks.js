// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import * as BooksAPI from './BooksAPI.js';
import Bookshelf from './Bookshelf.js';
import type { BookType, ShelfType } from './Types.js';
import './SearchBooks.css';

type Props = {
  books: Array<BookType>,
  shelves: Array<ShelfType>,
  handleShelfChange: Function
};

type State = {
  query: string,
  searchResults: Array<BookType>
};


class SearchBooks extends Component<Props, State> {

  state = {
    query: '',
    searchResults: []
  };

  handleQueryChange = ({ target }: { target: HTMLInputElement }) => {
    const query = target.value.trim();

    this.setState({ query });
    this.debounced(query);
  };

  getSearchResults = (query: string) => {

    // TODO: Fix problem with quickly deleting query
    // if (!query) {
    //   this.debounced.cancel();
    //   this.setState({ searchResults: [] });
    //   console.info('yup');
    //   return;
    // }

    return BooksAPI.search(query).then((searchResults: Array<BookType>) => {
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
              autoFocus="true"
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
