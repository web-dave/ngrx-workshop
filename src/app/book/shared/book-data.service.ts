import { Injectable } from '@angular/core';
import { IBook } from './book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BookDataService {
  constructor(private http: HttpClient) {}

  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>('http://localhost:4730/books');
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
