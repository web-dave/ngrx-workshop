import { createEntityAdapter } from '@ngrx/entity';
import { Book } from '../shared/book';
import { BooksState } from './books.store';
export interface BookEntity {
  [isbn: string]: Book;
}
export const bookAdapter = createEntityAdapter<Book>({
  selectId: book => book.isbn
});
