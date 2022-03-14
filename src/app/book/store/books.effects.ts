import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { BookDataService } from '../shared/book-data.service';
import { WAIT_FOR_BOOKS } from './books.actions';
@Injectable()
export class BookEffects {
  @Effect({ dispatch: false })
  loadBooks = this.actions.pipe(
    ofType(WAIT_FOR_BOOKS),
    tap(() => this.service.getBooksForStore())
  );

  constructor(private actions: Actions, private service: BookDataService) {}
}
