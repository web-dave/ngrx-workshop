// import { createSelector, createFeatureSelector } from '@ngrx/store';

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookCollectionSlice, bookFeatureName } from './books-collection.slice';

const bookFeatureSelector = createFeatureSelector<{
  bookCollection: BookCollectionSlice;
}>(bookFeatureName);

const bookCollectionSelector = createSelector(
  bookFeatureSelector,
  (state) => state.bookCollection
);

export const bookListSelector = createSelector(
  bookCollectionSelector,
  (state) => state.entities
);

export const bookSelector = (isbn: string) =>
  createSelector(bookListSelector, (books) =>
    books.find((book) => book.isbn === isbn)
  );
