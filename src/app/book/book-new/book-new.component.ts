import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Book } from '../shared/book';
import { BookDataService } from '../shared/book-data.service';
import { createBookStart } from '../store/books-collection.actions';
import { noSpecialChars, uniqueIsbn } from './validators';

@Component({
  selector: 'book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css'],
})
export class BookNewComponent implements OnInit {
  form: FormGroup;

  get authors(): FormArray {
    return this.form.controls['author'] as FormArray;
  }

  constructor(
    private fb: FormBuilder,
    private bookService: BookDataService,
    private store: Store
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      isbn: [
        '',
        [Validators.required, Validators.maxLength(13)],
        [uniqueIsbn(this.bookService)],
      ],
      title: ['', [Validators.required, noSpecialChars]],
      author: this.fb.array([]),
    });
  }

  addAuthor() {
    // const author = this.fb.group({
    //   author: ['', [Validators.required]],
    // });
    const author = this.fb.control('', [Validators.required]);
    this.authors.push(author);
  }

  removeAuthor(i: number) {
    this.authors.removeAt(i);
  }

  onSubmit() {
    const book: Book = {
      id: this.form.value.isbn,
      isbn: this.form.value.isbn,
      title: this.form.value.title,
      author: this.authors
        .getRawValue()
        // .map((data) => data.author)
        .join(' / '),
      subtitle: '',
      abstract: '',
      numPages: 123,
      publisher: {
        name: '',
        url: '',
      },
    };
    this.bookService.createBook(book).subscribe((book: Book) => {
      this.store.dispatch(createBookStart({ book }));
      console.log('Added new book', book);
    });
  }
}
