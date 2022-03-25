import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { BookDataService } from '../shared/book-data.service';
import { bookFeatureLoaded, LoadBooks } from './books.actions';

@Injectable()
export class BookEffects {
  @Effect()
  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(bookFeatureLoaded),
      switchMap(() => this.service.getBooks()),
      map((books) => LoadBooks({ books }))
    )
  );

  constructor(private actions$: Actions, private service: BookDataService) {}
}
