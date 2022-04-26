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
const { selectAll, selectEntities } = bookEntityAdapter.getSelectors(
  bookCollectionSelector
);
export const bookListSelector = selectAll;

export const bookSelector = (isbn: string) =>
  createSelector(selectEntities, (books) => books[isbn]);
