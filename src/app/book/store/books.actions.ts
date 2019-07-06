import { Action } from '@ngrx/store';
import { Book } from '../shared/book';

export const LOAD_BOOKS = '[books] load books';
export const WAIT_FOR_BOOKS = '[books] wait for books';

export class LoadBooks implements Action {
  readonly type: string = LOAD_BOOKS;
  constructor(private books: Book[]) {}
}

export class WaitForBooks implements Action {
  readonly type: string = WAIT_FOR_BOOKS;
  constructor() {}
}

export type BookActions = LoadBooks | WaitForBooks;
