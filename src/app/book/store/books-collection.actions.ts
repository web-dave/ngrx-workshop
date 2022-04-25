// import { Action } from '@ngrx/store';
import { createAction, props } from '@ngrx/store';
import { Book } from '../shared/book';
export const createBookStart = createAction(
  '[Book] create Book start',
  props<{ book: Book }>()
);
