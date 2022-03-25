import { createEntityAdapter } from '@ngrx/entity';
import { Book } from '../shared/book';
export const bookAdapter = createEntityAdapter<Book>({
  selectId: (book) => book.isbn,
});
