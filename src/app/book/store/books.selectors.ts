import { createSelector, createFeatureSelector } from '@ngrx/store';
import { booksStoreName, BooksState } from './books.store';
import { bookAdapter } from './books.entities';

const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = bookAdapter.getSelectors();

export const getBooks = createSelector(
  createFeatureSelector(booksStoreName),
  selectAll
);
export const getBookIds = createSelector(
  createFeatureSelector(booksStoreName),
  selectIds
);
export const getBookEntities = createSelector(
  createFeatureSelector(booksStoreName),
  selectEntities
);
export const getBookTotal = createSelector(
  createFeatureSelector(booksStoreName),
  selectTotal
);
