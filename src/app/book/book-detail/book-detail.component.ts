import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { ActivatedRoute } from '@angular/router';
import { BookDataService } from '../shared/book-data.service';
import { Store } from '@ngrx/store';
import { bookSelector } from '../store/books.selectors';
import { filter, startWith } from 'rxjs/operators';

@Component({
  selector: 'book-detail',
  templateUrl: 'book-detail.component.html',
  styleUrls: ['book-detail.component.css'],
})
export class BookDetailComponent implements OnInit {
  public book: Book;
  private b: Book = {
    id: '',
    isbn: '',
    title: '',
    author: '',
    subtitle: '',
    abstract: '',
    numPages: 123,
    publisher: {
      name: '',
      url: '',
    },
  };

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit() {
    this.route.params.subscribe((params: { isbn: string }) => {
      this.store
        .select(bookSelector(params.isbn))
        .pipe(
          startWith(this.b),
          filter((book): book is Book => !!book)
        )
        .subscribe((book) => (this.book = book));
    });
  }
}
