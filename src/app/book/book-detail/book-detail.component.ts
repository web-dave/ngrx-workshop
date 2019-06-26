import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { ActivatedRoute } from '@angular/router';
import { BookDataService } from '../shared/book-data.service';
import { Observable } from 'rxjs';
import { BooksState } from '../store/books.store';
import { Store } from '@ngrx/store';
import { getBook } from '../store/books.selectors';

@Component({
  selector: 'book-detail',
  templateUrl: 'book-detail.component.html',
  styleUrls: ['book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  public book$: Observable<Book>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<BooksState>
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: { isbn: string }) => {
      this.book$ = this.store.select(state => getBook(params.isbn, state));
    });
  }
}
