import { createSelector, createFeatureSelector } from '@ngrx/store';
import { bookAdapter } from './books.entities';
import { BooksState, booksStoreName } from './books.store';

const { selectAll, selectEntities, selectIds, selectTotal } =
  bookAdapter.getSelectors();

export const getBooks = createSelector(
  createFeatureSelector(booksStoreName),
  selectAll
);

export const getBook = (isbn: string) =>
  createSelector(
    createFeatureSelector(booksStoreName),
    (state: BooksState) => selectEntities(state)[isbn]
  );
