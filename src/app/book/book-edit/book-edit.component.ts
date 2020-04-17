import { Component, OnInit } from '@angular/core';
import { IBook } from '../shared/book';
import { ActivatedRoute } from '@angular/router';
import { BookDataService } from '../shared/book-data.service';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css'],
})
export class BookEditComponent implements OnInit {
  book: IBook;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookDataService
  ) {}

  ngOnInit() {
    this.route.params
      .pipe(
        mergeMap((params: { isbn: string }) =>
          this.bookService.getBookByIsbn(params.isbn)
        )
      )
      .subscribe((book) => (this.book = book));
  }

  onSubmit(value) {
    this.bookService
      .updateBook(this.book.isbn, value)
      .subscribe((book: IBook) => console.log('Book updated', book));
  }
}
