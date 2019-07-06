import { Component, OnInit } from '@angular/core';
import { BooksState } from './store/books.store';
import { Store } from '@ngrx/store';
import { WaitForBooks } from './store/books.actions';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  constructor(private store: Store<BooksState>) {
    this.store.dispatch(new WaitForBooks());
  }

  ngOnInit() {}
}
