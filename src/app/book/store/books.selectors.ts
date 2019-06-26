import { createSelector, createFeatureSelector } from '@ngrx/store';
import { booksStoreName, BooksState } from './books.store';
import { bookAdapter } from './books.entities';

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = bookAdapter.getSelectors();

export const selectBookState = createFeatureSelector<BooksState>(
  booksStoreName
);

export const getBooks = createSelector(
  selectBookState,
  selectAll
);

export const getBookEntities = createSelector(
  selectBookState,
  selectEntities
);

export const getBook = (isbn: string, state: BooksState) => {
  return getBookEntities(state)[isbn];
};
