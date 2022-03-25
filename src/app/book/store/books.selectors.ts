import { createSelector, createFeatureSelector } from '@ngrx/store';
import { bookAdapter } from './books.entities';
import { bookStoreName, IBookState } from './books.store';

const { selectAll, selectEntities } = bookAdapter.getSelectors();
bookAdapter.setAll;

export const booksSelector = createSelector(
  createFeatureSelector<IBookState>(bookStoreName),
  selectAll
);
export const bookSelector = (isbn: string) =>
  createSelector(
    createFeatureSelector<IBookState>(bookStoreName),
    (state) => selectEntities(state)[isbn]
  );
