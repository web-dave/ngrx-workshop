import { AbstractControl, ValidationErrors } from '@angular/forms';

export const noSpecialChars = (
  control: AbstractControl
): ValidationErrors | null => {
  return (control.value as string).match(/[!"§%$&/()=?äüöÖÄÜ]+/gm)
    ? { noSpecialChars: 'Special Chars found' }
    : null;
};
