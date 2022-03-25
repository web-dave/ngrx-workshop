import { EntityState } from '@ngrx/entity';
import { Book } from '../shared/book';
import { bookAdapter } from './books.entities';

export const bookStoreName = 'bookFeature';

export interface IState {
  [bookStoreName]: IBookState;
}

export interface IBookState extends EntityState<Book> {}

export const initialState: IBookState = bookAdapter.getInitialState();
