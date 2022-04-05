import { Component, Host, Inject, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { ActivatedRoute } from '@angular/router';
import { BookDataService } from '../shared/book-data.service';
import { HOST } from 'src/app/app.module';

@Component({
  selector: 'book-detail',
  templateUrl: 'book-detail.component.html',
  styleUrls: ['book-detail.component.css'],
  providers: [
    {
      provide: HOST,
      useFactory: () => ({ name: 'Hurbelwonz' }),
    },
  ],
})
export class BookDetailComponent implements OnInit {
  public book: Book;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookDataService,
    public nnnn: HOST
  ) {
    console.log(this.nnnn);
  }

  ngOnInit() {
    console.log(this.route);

    this.route.params.subscribe((params: { isbn: string }) => {
      this.bookService
        .getBookByIsbn(params.isbn)
        .subscribe((book) => (this.book = book));
    });
  }
}
