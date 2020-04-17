import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IBooksState, bookStoreName } from './books.store';
import { bookAdapter } from './books.entities';

const { selectAll, selectEntities } = bookAdapter.getSelectors();

export const getBooksSelector = createSelector(
  createFeatureSelector(bookStoreName),
  selectAll
);
export const getBookSelector = (isbn: string) =>
  createSelector(
    createFeatureSelector(bookStoreName),
    (state: IBooksState) => selectEntities(state)[isbn]
  );
