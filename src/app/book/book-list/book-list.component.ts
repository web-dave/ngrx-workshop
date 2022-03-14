import { Component, OnInit } from '@angular/core';
import { IBook } from '../shared/book';
import { BookDataService } from '../shared/book-data.service';
import { Observable } from 'rxjs';
import { getBooks } from '../store/books.selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'book-list',
  templateUrl: 'book-list.component.html',
  styleUrls: ['book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books$: Observable<IBook[]>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.books$ = this.store.select(getBooks);
  }
}
