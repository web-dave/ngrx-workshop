import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { Book } from '../shared/book';
import { BookDataService } from '../shared/book-data.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { Store } from '@ngrx/store';
import { booksStoreName, BooksState } from '../store/books.store';
import { getBooks } from '../store/books.selectors';

@Component({
  selector: 'book-list',
  templateUrl: 'book-list.component.html',
  styleUrls: ['book-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookListComponent implements OnInit {
  books$: Observable<Book[]>;

  books: Book[];
  bookSub = new BehaviorSubject(this.books);
  i = 0;

  // constructor(private bookData: BookDataService) {}
  constructor(
    private store: Store<BooksState>,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    // this.books$ = this.bookData.getBooks();
    this.books$ = this.store.select(state => getBooks(state));
    this.books$.subscribe(b => {
      this.books = b;
      // this.cdr.detectChanges();
    });
    setInterval(() => {
      this.i++;
      this.books[0].title = 'Design Patterns ' + this.i;
      this.bookSub.next(this.books);
    }, 1500);
  }
}
