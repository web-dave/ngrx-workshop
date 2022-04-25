import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { bookListSelector } from '../store/books.selectors';

@Component({
  selector: 'book-list',
  templateUrl: 'book-list.component.html',
  styleUrls: ['book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books$: Observable<ReadonlyArray<Book>>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.books$ = this.store.select(bookListSelector);
  }
}
