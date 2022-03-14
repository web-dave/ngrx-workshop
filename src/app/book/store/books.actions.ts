import { createAction, props } from '@ngrx/store';
import { IBook } from '../shared/book';

export const LOAD_BOOKS = '[books] load books';
export const WAIT_FOR_BOOKS = '[books] wait for books';

export const LoadBooks = createAction(LOAD_BOOKS, props<{ books: IBook[] }>());
export const WaitForBooks = createAction(WAIT_FOR_BOOKS);
