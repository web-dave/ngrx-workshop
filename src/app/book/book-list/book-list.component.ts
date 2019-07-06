import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { BooksState } from '../store/books.store';
import {
  getBooks,
  getBookIds,
  getBookEntities
} from '../store/books.selectors';

@Component({
  selector: 'book-list',
  templateUrl: 'book-list.component.html',
  styleUrls: ['book-list.component.css']
})
export class BookListComponent implements OnInit {
  books$: Observable<Book[]>;

  constructor(private store: Store<BooksState>) {}

  ngOnInit() {
    // this.books$ = this.bookData.getBooks();
    this.books$ = this.store.select(getBooks);

    this.store
      .select(getBookEntities)
      .subscribe(ids => console.log('getBookEntities', ids));
    this.store.select(getBooks).subscribe(ids => console.log('getBooks', ids));
  }
}
