// tslint:disable:max-line-length
// import { Action, createSelector, createFeatureSelector } from '@ngrx/store';
import { IBook } from '../shared/book';
import { initialState, BooksState } from './books.store';
import { BookActions, LOAD_BOOKS } from './books.actions';
import { bookAdapter } from './books.entities';

// const circle = { radius: 3, color: 'blue' };
// // const color = circle.color
// const { color } = circle;
// const arr = [1, 2, 3, 4, 5]
// const [st, nd] = arr;

export function booksReducer(
  state = initialState,
  action: BookActions
): BooksState {
  switch (action.type) {
    case LOAD_BOOKS:
      return bookAdapter.addAll(action.books, state);
    default: {
      return state;
    }
  }
}
