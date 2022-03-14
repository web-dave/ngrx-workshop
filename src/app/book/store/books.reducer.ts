// tslint:disable:max-line-length
// import { Action, createSelector, createFeatureSelector } from '@ngrx/store';
import { IBook } from '../shared/book';
import { BookActions, LoadBooks, LOAD_BOOKS } from './books.actions';
import { BooksState, initialState } from './books.store';
export function booksReducer(
  state = initialState,
  action: BookActions
): BooksState {
  switch (action.type) {
    case LOAD_BOOKS:
      return {
        ...state,
        books: (action as LoadBooks).books,
      };
    default: {
      return state;
    }
  }
}
