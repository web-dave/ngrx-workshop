import { ActionReducerMap } from '@ngrx/store';
import { bookCollectionReducer } from './books-collection.reducer';
import { BookCollectionSlice } from './books-collection.slice';

export interface BookState {
  bookCollection: BookCollectionSlice;
}

export const bookReducerMap: ActionReducerMap<BookState> = {
  bookCollection: bookCollectionReducer,
};
