import { IBook } from '../shared/book';
import { EntityAdapter, EntityState } from '@ngrx/entity';
import { bookAdapter } from './books.entities';

export const booksStoreName = 'books';
// export interface BooksState {
//   books: IBook[];
// }
// export const initialState: BooksState = {
//   books: []
// };
export interface BooksState extends EntityState<IBook> {}
export const initialState: BooksState = bookAdapter.getInitialState();
