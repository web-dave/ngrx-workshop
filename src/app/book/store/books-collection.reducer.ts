import { createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Book } from '../shared/book';
import { createBookStart, loadBooksComplete } from './books-collection.actions';

export const bookEntityAdapter = createEntityAdapter<Book>({
  selectId: (book) => book.isbn,
});

const initialBookCollectionState = bookEntityAdapter.getInitialState();

export const bookCollectionReducer = createReducer(
  initialBookCollectionState,
  //   on(createBookStart, (state, action) => {
  //     return { ...state, entities: [...state.entities, action.book] };
  //   }),
  on(createBookStart, (state, { book }) =>
    bookEntityAdapter.addOne(book, state)
  ),
  on(loadBooksComplete, (state, { books }) =>
    bookEntityAdapter.setAll(books, state)
  )
);
