import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookDataService } from '../shared/book-data.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  BookCollectionSlice,
  bookFeatureName,
} from '../store/books-collection.slice';

@Component({
  selector: 'book-list',
  templateUrl: 'book-list.component.html',
  styleUrls: ['book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books$: Observable<ReadonlyArray<Book>>;

  constructor(
    private store: Store<{
      [bookFeatureName]: { bookCollection: BookCollectionSlice };
    }>
  ) {}

  ngOnInit() {
    this.books$ = this.store.select(
      (state) => state[bookFeatureName].bookCollection.entities
    );
  }
}
