import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookDataService } from '../shared/book-data.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { booksStoreName, BooksState } from '../store/books.store';
import { getBooks } from '../store/books.selectors';

@Component({
  selector: 'book-list',
  templateUrl: 'book-list.component.html',
  styleUrls: ['book-list.component.css']
})
export class BookListComponent implements OnInit {
  books$: Observable<Book[]>;

  // constructor(private bookData: BookDataService) {}
  constructor(private store: Store<BooksState>) {}

  ngOnInit() {
    // this.books$ = this.bookData.getBooks();
    this.books$ = this.store.select(state => getBooks(state));
  }
}
