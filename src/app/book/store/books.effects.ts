import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs/operators';
import { BookDataService } from '../shared/book-data.service';
import { loadBooksComplete, loadBooksStart } from './books-collection.actions';

@Injectable()
export class BookCollectionEffects {
  loadStart = createEffect(() =>
    this.actions$.pipe(
      ofType(loadBooksStart),
      exhaustMap(() => this.api.getBooks()),
      map((books) => loadBooksComplete({ books }))
    )
  );
  constructor(private actions$: Actions, private api: BookDataService) {}
}
