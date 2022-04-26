import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
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
  ctrlNames: string[] = [];

  user = {
    name: '',
    adress: [
      {
        street: '',
        city: 0,
      },
    ],
  };
  fa = new FormArray([]);
  nameCtrl = new FormControl('', [], []);

  constructor(
    private builder: FormBuilder,
    private bookService: BookDataService,
    private store: Store
  ) {}

  ngOnInit() {
    of({
      name: {
        type: 'text',
        required: true,
      },
      adress: {
        type: 'text',
        required: true,
      },
      age: {
        type: 'number',
      },
    }).subscribe((data) => {
      this.ctrlNames = Object.keys(data);
      this.form = new FormGroup({});
      this.ctrlNames.forEach((name) => {
        this.form.addControl(
          name,
          new FormControl('', data[name].required ? [Validators.required] : [])
        );
      });
    });
    // this.form = this.builder.group({
    //   isbn: [
    //     '',
    //     [
    //       Validators.required,
    //       Validators.minLength(13),
    //       Validators.maxLength(13),
    //     ],
    //     [],
    //   ],
    //   title: ['', Validators.required],
    //   author: ['', Validators.required],
    // });
    // this.form.addControl('name', this.nameCtrl);

    // this.form.get('isbn').valueChanges.subscribe((data) => {
    //   if (data.length >= 1) {
    //     console.table(data);
    //     this.nameCtrl.setValue(data);
    //     this.nameCtrl.addValidators([Validators.minLength(3)]);
    //     this.nameCtrl.updateValueAndValidity();
    //   } else {
    //     this.nameCtrl.setValue('');
    //     this.nameCtrl.removeValidators([Validators.minLength(3)]);
    //     this.nameCtrl.updateValueAndValidity();
    //   }
    // });
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
