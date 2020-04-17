// tslint:disable:max-line-length
// import { Action, createSelector, createFeatureSelector } from '@ngrx/store';
import { IBook } from '../shared/book';
import { booksState, IBooksState } from './books.store';
import { IBookActions, LOAD_BOOKS } from './books.actions';
import { bookAdapter } from './books.entities';

export function booksReducer(
  state = booksState,
  action: IBookActions
): IBooksState {
  switch (action.type) {
    case LOAD_BOOKS:
      return bookAdapter.addAll(action.books, state);
    default:
      return state;
  }
}
