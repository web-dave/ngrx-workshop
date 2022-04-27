import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { bookListSelector } from '../store/books.selectors';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'book-list',
  templateUrl: 'book-list.component.html',
  styleUrls: ['book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books$: Observable<ReadonlyArray<Book>>;

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit() {
    // this.books$ = this.store.select(bookListSelector);
    this.route.data.subscribe((data) => console.log(data));
    this.books$ = this.route.data.pipe(map((data) => data[0]));
  }
}
