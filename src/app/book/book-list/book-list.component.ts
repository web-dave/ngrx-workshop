import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookDataService } from '../shared/book-data.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { bookStoreName, IBookState, IState } from '../store/books.store';
import { booksSelector } from '../store/books.selectors';
import { tap } from 'rxjs/operators';
import { BookComponent } from '../book.component';

@Component({
  selector: 'book-list',
  templateUrl: 'book-list.component.html',
  styleUrls: ['book-list.component.css'],
})
export class BookListComponent {
  books$ = this.store.select(booksSelector).pipe(tap(console.log));

  constructor(private store: Store, private parent: BookComponent) {
    console.log(parent.text);
  }
}
