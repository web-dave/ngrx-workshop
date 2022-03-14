import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BookDataService } from './shared/book-data.service';
import { WaitForBooks } from './store/books.actions';
import { BooksState } from './store/books.store';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  constructor(private store: Store<BooksState>) {}

  ngOnInit() {
    this.store.dispatch(new WaitForBooks());
  }
}
