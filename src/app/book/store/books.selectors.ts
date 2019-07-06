import { createSelector, createFeatureSelector } from '@ngrx/store';
import { booksStoreName, BooksState } from './books.store';

export const getBooks = createSelector(
  createFeatureSelector(booksStoreName),
  (state: BooksState) => state.books
);
