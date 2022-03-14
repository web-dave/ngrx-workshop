import { createEntityAdapter } from '@ngrx/entity';
import { IBook } from '../shared/book';
export interface IBookEntity {
  [isbn: string]: IBook;
}
export const bookAdapter = createEntityAdapter<IBook>({
  selectId: (book) => book.isbn,
});
