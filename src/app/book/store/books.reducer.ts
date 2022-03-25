// tslint:disable:max-line-length
// import { Action, createSelector, createFeatureSelector } from '@ngrx/store';
import { IBookActions, LoadBooks, loadBooks } from './books.actions';
import { IBookState, initialState } from './books.store';

export function booksReducer(
  state = initialState,
  action: IBookActions
): IBookState {
  switch (action.type) {
    case loadBooks:
      return {
        ...state,
        books: (action as LoadBooks).books,
      };

    default:
      return state;
  }
}
