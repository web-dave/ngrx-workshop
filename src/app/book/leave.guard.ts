import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivate,
  Resolve,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { delay, filter, first, skip, take, tap } from 'rxjs/operators';
import { BookNewComponent } from './book-new/book-new.component';
import { Book } from './shared/book';
import { BookDataService } from './shared/book-data.service';
import { loadBooksStart } from './store/books-collection.actions';
import { bookListSelector } from './store/books.selectors';

@Injectable({
  providedIn: 'root',
})
export class LeaveGuard
  implements CanDeactivate<BookNewComponent>, Resolve<Book[]>
{
  constructor(private service: BookDataService, private store: Store) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Book[]> {
    this.store.dispatch(loadBooksStart());
    return this.store
      .select(bookListSelector)
      .pipe(tap(console.log), delay(10), take(2));
    // return this.service.getBooks();
  }
  canDeactivate(
    component: BookNewComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean {
    console.log(component);
    return component.form.pristine || component.isSaved
      ? true
      : confirm('ölskdjföasjrfkhaöfh');
  }
}
