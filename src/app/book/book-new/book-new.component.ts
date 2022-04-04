import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  AsyncValidatorFn,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { BehaviorSubject, Observable, of, timer } from 'rxjs';
import { delay, first, map, switchMap, tap } from 'rxjs/operators';
import { Book } from '../shared/book';
import { BookDataService } from '../shared/book-data.service';

@Component({
  selector: 'book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css'],
})
export class BookNewComponent implements OnInit {
  form: FormGroup;
  name: FormControl;
  age: FormControl;
  foo: FormGroup;

  name1 = 'Paul';

  constructor(private fb: FormBuilder, private bookService: BookDataService) {}

  getKeysOfFG(fg: FormGroup): string[] {
    return Object.keys(fg.controls);
  }
  // 👩‍🦳👶
  ngOnInit() {
    this.foo = this.fb.group({
      name: 'Dave',
      age: 0,
      icon: '',
      files: this.fb.array([]),
    });
    const adr = this.fb.group({
      name: 'Dave',
      age: 0,
      icon: '',
    });
    this.name = this.foo.get('name') as FormControl;
    this.age = this.foo.get('age') as FormControl;
    this.foo.get('name').addValidators(Validators.required);
    // this.foo.get('files').push()
    this.foo.addControl('addres', adr);
    setTimeout(() => {
      this.foo.get('name').addAsyncValidators(asyncNameValidator('Dave'));
      this.foo.get('name').updateValueAndValidity();
    }, 3000);
    this.age.valueChanges.subscribe((data) => {
      // this.name.setValue('Dave');
      let icon = '👩‍🦳';
      if (data <= 54) {
        icon = '👶';
      }
      this.foo.get('icon').setValue(icon);
    });

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

    this.bookService
      .createBook(book)
      .subscribe((book: Book) => console.log('Added new book', book));
  }

  hurz(e: any) {
    console.log(e);
  }
}

const asyncNameValidator =
  (name: string): AsyncValidatorFn =>
  (control: AbstractControl): Observable<ValidationErrors | null> => {
    const request = new BehaviorSubject('');
    request.next(control.value);
    return timer(1500).pipe(
      switchMap(() =>
        request.pipe(
          tap(console.log),
          map((value) => {
            let retVal: ValidationErrors | null = null;
            if (value === name) {
              retVal = { name: '08154711' };
            }
            return retVal;
          }),
          first()
        )
      )
    );
  };
