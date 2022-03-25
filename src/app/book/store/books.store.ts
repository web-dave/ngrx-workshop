import { Book } from '../shared/book';

export const bookStoreName = 'books';

export interface IBookState {
  books: Book[];
}

export const initialState: IBookState = {
  books: [],
};
