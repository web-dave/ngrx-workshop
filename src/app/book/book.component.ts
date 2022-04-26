import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadBooksStart } from './store/books-collection.actions';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadBooksStart());
  }
}
