import { EntityState } from '@ngrx/entity';
import { IBook } from '../shared/book';
import { bookAdapter } from './books.entities';

export const booksStoreName = 'books';

export interface BooksState extends EntityState<IBook> {}

export const initialState: BooksState = bookAdapter.getInitialState();
