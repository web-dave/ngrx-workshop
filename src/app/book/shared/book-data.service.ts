import { Injectable } from '@angular/core';
import { IBook } from './book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { BooksState } from '../store/books.store';
import { LoadBooks } from '../store/books.actions';

@Injectable({ providedIn: 'root' })
export class BookDataService {
  constructor(private http: HttpClient, private store: Store<BooksState>) {}

  getBooks() {
    this.http
      .get<IBook[]>('http://localhost:4730/books')
      .subscribe(books => this.store.dispatch(new LoadBooks(books)));
  }
  getBookByIsbn(isbn: string): Observable<IBook> {
    return this.http.get<IBook>(`http://localhost:4730/books/${isbn}`);
  }
  createBook(book: IBook): Observable<IBook> {
    return this.http.post<IBook>('http://localhost:4730/books', book);
  }

  updateBook(isbn: string, vector: any): Observable<IBook> {
    return this.http.patch<IBook>(
      `http://localhost:4730/books/${isbn}`,
      vector
    );
  }
}
