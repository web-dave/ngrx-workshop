import { Injectable } from '@angular/core';
import { Book } from './book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ValidationErrors } from '@angular/forms';
import { first, map, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { isbnList } from '../store/books.selectors';

@Injectable({ providedIn: 'root' })
export class BookDataService {
  constructor(private http: HttpClient, private store: Store) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:4730/books');
  }

  isIsbnUnique(isbn: string): Observable<ValidationErrors | null> {
    return this.getBooks().pipe(
      map((books) => books.map((book) => book.isbn.toString())),
      tap((data) => console.log(data, isbn)),
      map((list) => list.includes(isbn)),
      map((found) => (found ? { uniqueIsbn: 'Already exist' } : null))
    );
  }

  isIsbnUniqueState(isbn: string): Observable<ValidationErrors | null> {
    return this.store.select(isbnList).pipe(
      map((list) => list.map((n) => String(n))),
      tap((data) => console.log(data, isbn)),
      map((list) => list.includes(String(isbn))),
      map((found) => (found ? { uniqueIsbn: 'Already exist' } : null)),
      first() // sehr wichtig
    );
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
