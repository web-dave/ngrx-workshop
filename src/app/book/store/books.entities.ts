import { createEntityAdapter } from '@ngrx/entity';
import { IBook } from '../shared/book';
import { IBooksState } from './books.store';

export interface IBookEntity {
  [isbn: string]: IBook;
}

export const bookAdapter = createEntityAdapter<IBook>({
  selectId: (book) => book.isbn,
});
