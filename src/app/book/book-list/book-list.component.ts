import { Component, OnInit } from '@angular/core';
import { IBook } from '../shared/book';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { getBooksSelector } from '../store/books.selectors';
import { BookDataService } from '../shared/book-data.service';
import { LoadingBooks, LoadBooks } from '../store/books.actions';

@Component({
  selector: 'book-list',
  templateUrl: 'book-list.component.html',
  styleUrls: ['book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books$: Observable<IBook[]>;

  constructor(private store: Store<{}>) {}

  ngOnInit() {
    this.books$ = this.store.select(getBooksSelector);
  }
}
