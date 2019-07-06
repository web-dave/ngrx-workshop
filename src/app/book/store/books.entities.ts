import { createEntityAdapter } from '@ngrx/entity';
import { Book } from '../shared/book';
import { BooksState } from './books.store';
export interface BookEntity {
  [isbn: string]: Book;
}
export const bookAdapter = createEntityAdapter<Book>();

export const array2entity = (books: Book[], state: BooksState) => {
  return books.reduce(
    (entities: BookEntity, book: Book) => {
      return {
        ...entities,
        [book.isbn]: book
      };
    },
    { ...state.entities }
  );
};
