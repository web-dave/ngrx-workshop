import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Observable, of, timer } from 'rxjs';
import { debounce, debounceTime, map, switchMap, tap } from 'rxjs/operators';
import { BookDataService } from '../shared/book-data.service';

export const noSpecialChars = (
  control: AbstractControl
): ValidationErrors | null => {
  return (control.value as string).match(/[!"§%$&/()=?äüöÖÄÜ]+/gm)
    ? { noSpecialChars: 'Special Chars found' }
    : null;
};

export const uniqueIsbn =
  (service: BookDataService): AsyncValidatorFn =>
  (control: AbstractControl): Observable<ValidationErrors | null> => {
    return timer(500).pipe(
      switchMap(() => service.isIsbnUnique(control.value))
    );
  };
