import { createSelector, createFeatureSelector } from '@ngrx/store';
import { BooksState, booksStoreName } from './books.store';
export const getBooks = createSelector(
  createFeatureSelector(booksStoreName),
  (state: BooksState) => state.books
);
