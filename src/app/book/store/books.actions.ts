import { Action } from '@ngrx/store';
import { Book } from '../shared/book';

export const loadBooks = '[books] load Books';
export const bookFeatureLoaded = '[books] Bookfeature loaded';

export class LoadBooks implements Action {
  type = loadBooks;
  constructor(public books: Book[]) {}
}

export class BookFeatureLoaded implements Action {
  type = bookFeatureLoaded;
}

export type IBookActions = LoadBooks | BookFeatureLoaded;
