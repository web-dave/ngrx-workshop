import { Injectable } from '@angular/core';
import { Book } from './book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { BooksState } from '../store/books.store';
import { LoadBooks } from '../store/books.actions';

@Injectable({ providedIn: 'root' })
export class BookDataService {
  constructor(private http: HttpClient, private store: Store<BooksState>) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:4730/books');
  }

  getBookByIsbn(isbn: string): Observable<Book> {
    return this.http.get<Book>(`http://localhost:4730/books/${isbn}`);
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>('http://localhost:4730/books', book);
  }

  updateBook(isbn: string, vector: any): Observable<Book> {
    return this.http.patch<Book>(`http://localhost:4730/books/${isbn}`, vector);
  }

  loadBooks() {
    this.getBooks().subscribe(books =>
      this.store.dispatch(new LoadBooks(books))
    );
  }
}
