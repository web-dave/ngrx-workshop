// tslint:disable:max-line-length
import { LOAD_BOOKS } from './books.actions';
import { bookAdapter } from './books.entities';
import { BooksState, initialState } from './books.store';
export function booksReducer(state = initialState, action: any): BooksState {
  switch (action.type) {
    case LOAD_BOOKS:
      return bookAdapter.setAll(action.books, state);
    default: {
      return state;
    }
  }
}
