import { createSelector } from '@reduxjs/toolkit';
import { ID, TITLE, AUTHOR } from '../../assets/constants';
import { sortByID } from '../../assets/helpers';

export const getAllBooks = state => state.root.books;

export const getBooksSortedBy = state => state.root.books.sortBy;

export const getAllBookData = createSelector(getAllBooks, (state) => {
  const allBooks = [...state.data];
  if (state.sortBy === ID) {
    return allBooks.sort((a, b) => sortByID(a.id, b.id));
  }
  else if (state.sortBy === TITLE) {
    return allBooks.sort((a, b) => a.title.localeCompare(b.title));
  }
  else if (state.sortBy === AUTHOR) {
    return allBooks.sort((a, b) => a.author.localeCompare(b.author));
  }
  return allBooks;
});

export const getNumberOfBooks = createSelector(getAllBookData, (state) => {
  return state.length;
});

export const getAllBookDataBySearchString = createSelector(getAllBookData, (state, searchString) => {
  return state.id === searchString;
});
