import { Component, OnInit } from '@angular/core';
import { IBook } from '../shared/book';
import { BookDataService } from '../shared/book-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'book-list',
  templateUrl: 'book-list.component.html',
  styleUrls: ['book-list.component.css']
})
export class BookListComponent implements OnInit {
  books$: Observable<IBook[]>;

  constructor(private bookData: BookDataService) {}

  ngOnInit() {
    this.books$ = this.bookData.getBooks();
  }
}
