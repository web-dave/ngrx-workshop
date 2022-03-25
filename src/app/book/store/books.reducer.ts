// tslint:disable:max-line-length
// import { Action, createSelector, createFeatureSelector } from '@ngrx/store';
import { createReducer, on } from '@ngrx/store';
import { LoadBooks } from './books.actions';
import { bookAdapter } from './books.entities';
import { initialState } from './books.store';

export const booksReducer = createReducer(
  initialState,
  on(LoadBooks, (state, { books }) => bookAdapter.setAll(books, state))
);
