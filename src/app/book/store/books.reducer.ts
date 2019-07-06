import { initialState, BooksState } from './books.store';
import { BookActions, LOAD_BOOKS } from './books.actions';

export function booksReducer(
  state = initialState,
  action: BookActions
): BooksState {
  switch (action.type) {
    case LOAD_BOOKS:
      return {
        ...state,
        books: action.books
      };
    default: {
      return state;
    }
  }
}
