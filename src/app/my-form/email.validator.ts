import { FormControl } from '@angular/forms';

export function emailValidator(control: FormControl) {
  const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i;
  const value = control.value;

  const result = emailRegex.test(value);

  if (result) {
    return null;
  } else {
    return {
      'emailValidator': {
        valid: false
      }
    };
  }
}
