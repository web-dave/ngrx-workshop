import { TypedAction } from '@ngrx/store/src/models';
import { IBook } from '../shared/book';

export const LOAD_BOOKS = '[books] load books in store';
export const LOADING_BOOKS = '[books] loading books from api';

export class LoadBooks implements TypedAction<typeof LOAD_BOOKS> {
  readonly type = LOAD_BOOKS;
  constructor(public books: IBook[]) {}
}
export class LoadingBooks implements TypedAction<typeof LOADING_BOOKS> {
  readonly type = LOADING_BOOKS;
}

export type IBookActions = LoadBooks | LoadingBooks;
