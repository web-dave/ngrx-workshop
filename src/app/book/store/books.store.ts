// tslint:disable:max-line-length
import { Book } from '../shared/book';
import { EntityState } from '@ngrx/entity';
import { bookAdapter } from './books.entities';

export const booksStoreName = 'books';

export interface BooksState extends EntityState<Book> {}
export const initialState: BooksState = bookAdapter.getInitialState();
