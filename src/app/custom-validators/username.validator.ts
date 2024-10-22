import { AbstractControl } from '@angular/forms';
import { of } from 'rxjs';

export function ForbiddenNameValidation(control: AbstractControl) {
  const forbidden = /admin/.test(control.value);
  return forbidden ? { forbiddenName: { value: control.value } } : null;
}
