import { createAction, props } from '@ngrx/store';
import { Book } from '../shared/book';

export const loadBooks = '[books] load Books';
export const bookFeatureLoaded = '[books] Bookfeature loaded';

export const LoadBooks = createAction(loadBooks, props<{ books: Book[] }>());

export const BookFeatureLoaded = createAction(bookFeatureLoaded);
