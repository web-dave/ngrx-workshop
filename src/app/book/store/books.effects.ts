import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { BookDataService } from '../shared/book-data.service';
import { WAIT_FOR_BOOKS } from './books.actions';
import { tap, map } from 'rxjs/operators';

@Injectable()
export class BookEffects {
  constructor(private actions: Actions, private service: BookDataService) {}

  @Effect({ dispatch: false })
  loadBooks = this.actions.pipe(
    ofType(WAIT_FOR_BOOKS),
    map(() => this.service.getBooks())
  );
}
