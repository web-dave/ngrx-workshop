import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { BookDataService } from '../shared/book-data.service';
import { LOADING_BOOKS, LoadBooks } from './books.actions';
import { flatMap, map } from 'rxjs/operators';

@Injectable()
export class BookEffects {
  constructor(private actions$: Actions, private service: BookDataService) {}

  @Effect({ dispatch: true })
  readyForBooks$ = this.actions$.pipe(
    ofType(LOADING_BOOKS),
    flatMap(() => this.service.getBooks()),
    map((data) => new LoadBooks(data))
  );
}
