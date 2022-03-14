import { Component, OnInit } from '@angular/core';
import { IBook } from '../shared/book';
import { ActivatedRoute } from '@angular/router';
import { BookDataService } from '../shared/book-data.service';

@Component({
  selector: 'book-detail',
  templateUrl: 'book-detail.component.html',
  styleUrls: ['book-detail.component.css'],
})
export class BookDetailComponent implements OnInit {
  public book: IBook;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookDataService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: { isbn: string }) => {
      this.bookService
        .getBookByIsbn(params.isbn)
        .subscribe((book) => (this.book = book));
    });
  }
}
