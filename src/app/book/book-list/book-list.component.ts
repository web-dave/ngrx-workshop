import { Component, OnInit } from '@angular/core';
import { IBook } from '../shared/book';
import { BookDataService } from '../shared/book-data.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { booksStoreName, BooksState } from '../store/books.store';
import { getBooks } from '../store/books.selectors';
import { WaitForBooks } from '../store/books.actions';

@Component({
  selector: 'book-list',
  templateUrl: 'book-list.component.html',
  styleUrls: ['book-list.component.css']
})
export class BookListComponent implements OnInit {
  books$: Observable<IBook[]>;

  constructor(
    private bookData: BookDataService,
    private store: Store<BooksState>
  ) {}

  ngOnInit() {
    this.store.dispatch(new WaitForBooks());
    this.books$ = this.store.select(getBooks);
  }
}
