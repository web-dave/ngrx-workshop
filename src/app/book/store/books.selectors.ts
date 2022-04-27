import { createFeatureSelector, createSelector } from '@ngrx/store';
import { bookEntityAdapter } from './books-collection.reducer';
import { BookCollectionSlice, bookFeatureName } from './books-collection.slice';

const bookFeatureSelector = createFeatureSelector<{
  bookCollection: BookCollectionSlice;
}>(bookFeatureName);

const bookCollectionSelector = createSelector(
  bookFeatureSelector,
  (state) => state.bookCollection
);
// const bookSliceSelectors = bookEntityAdapter.getSelectors(
//   bookCollectionSelector
// );

const { selectAll, selectEntities, selectIds } = bookEntityAdapter.getSelectors(
  bookCollectionSelector
);
export const bookListSelector = selectAll;

export const isbnList = selectIds;

export const bookSelector = (isbn: string) =>
  createSelector(selectEntities, (books) => books[isbn]);
