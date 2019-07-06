import { Book } from '../shared/book';

export const booksStoreName = 'books';
export interface BooksState {
  books: Book[];
}
export const initialState: BooksState = {
  books: []
};
