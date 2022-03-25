import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Book } from './book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { BookFeatureLoaded, LoadBooks } from '../store/books.actions';

@Injectable({ providedIn: 'root' })
export class BookDataService implements OnDestroy {
  constructor(private http: HttpClient, private store: Store) {}
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:4730/books');
  }

  initState() {
    this.store.dispatch(BookFeatureLoaded());
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
}
