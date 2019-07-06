import { createSelector, createFeatureSelector } from '@ngrx/store';
import { booksStoreName, BooksState } from './books.store';

export const getBooks = createSelector(
  createFeatureSelector(booksStoreName),
  list =>
    // tslint:disable:no-string-literal
    Object.keys(list['entities']).map(isbn => {
      // console.log('-->', list.ids);
      return list['entities'][isbn];
    })
);
