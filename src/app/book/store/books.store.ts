import { IBook } from '../shared/book';
import { EntityState } from '@ngrx/entity';
import { bookAdapter } from './books.entities';

export const bookStoreName = 'bookstate';

// export interface IBooksState {
//   books: IBook[];
// }

// // tslint:disable:max-line-length
// export const booksState: IBooksState = {
//   books: [],
// };

export interface IBooksState extends EntityState<IBook> {}
export const booksState: IBooksState = bookAdapter.getInitialState();
