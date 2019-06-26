import { Component, OnInit } from '@angular/core';
import { BookDataService } from './shared/book-data.service';
import { Store } from '@ngrx/store';
import { BooksState } from './store/books.store';
import { LoadBooks, WaitForBooks } from './store/books.actions';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  constructor(private store: Store<BooksState>) {}

  ngOnInit() {
    this.store.dispatch(new WaitForBooks());
  }
}
