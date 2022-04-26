import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Book } from '../shared/book';
import { BookDataService } from '../shared/book-data.service';
import { createBookStart } from '../store/books-collection.actions';

@Component({
  selector: 'book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css'],
})
export class BookNewComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private bookService: BookDataService,
    private store: Store
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      isbn: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(13),
          Validators.maxLength(13),
        ]),
      ],
      title: ['', Validators.required],
      author: ['', Validators.required],
    });
  }

  onSubmit() {
    const book: Book = {
      id: this.form.value.isbn,
      isbn: this.form.value.isbn,
      title: this.form.value.title,
      author: this.form.value.author,
      subtitle: '',
      abstract: '',
      numPages: 123,
      publisher: {
        name: '',
        url: '',
      },
    };
    this.store.dispatch(createBookStart({ book }));
    this.bookService.createBook(book).subscribe((book: Book) => {
      console.log('Added new book', book);
    });
  }
}
