import { createReducer, on } from '@ngrx/store';
import { createBookStart, loadBooksComplete } from './books-collection.actions';
import { BookCollectionSlice } from './books-collection.slice';
const initialBookCollectionState: BookCollectionSlice = {
  entities: [],
};
export const bookCollectionReducer = createReducer(
  initialBookCollectionState,
  //   on(createBookStart, (state, action) => {
  //     return { ...state, entities: [...state.entities, action.book] };
  //   }),
  on(createBookStart, (state, { book }) => ({
    ...state,
    entities: [...state.entities, book],
  })),
  on(loadBooksComplete, (state, { books }) => ({
    ...state,
    entities: books,
  }))
);
