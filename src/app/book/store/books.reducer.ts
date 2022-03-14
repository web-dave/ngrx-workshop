// tslint:disable:max-line-length
import { createReducer, on } from '@ngrx/store';
import { LoadBooks, LOAD_BOOKS } from './books.actions';
import { bookAdapter } from './books.entities';
import { BooksState, initialState } from './books.store';

export const booksReducer = createReducer(
  initialState,
  on(LoadBooks, (state, { books }) => bookAdapter.setAll(books, state))
);
