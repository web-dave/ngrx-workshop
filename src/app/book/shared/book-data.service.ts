import { Injectable } from '@angular/core';
import { Book } from './book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ValidationErrors } from '@angular/forms';
import { map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class BookDataService {
  constructor(private http: HttpClient) {}

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
