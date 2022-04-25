import { createReducer } from '@ngrx/store';
import { BookCollectionSlice } from './books-collection.slice';
const initialBookCollectionState: BookCollectionSlice = {
  entities: [],
};
export const bookCollectionReducer = createReducer(initialBookCollectionState);
