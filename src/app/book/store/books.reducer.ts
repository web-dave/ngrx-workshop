import { initialState, BooksState } from './books.store';
import { BookActions, LOAD_BOOKS } from './books.actions';
import { bookAdapter } from './books.entities';

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
