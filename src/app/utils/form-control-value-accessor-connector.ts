import {
  AbstractControl,
  ControlValueAccessor,
  FormGroup,
  ValidationErrors,
  Validator,
} from '@angular/forms';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

/**
 * Presents form as FormControl, value is an object
 * @see https://www.youtube.com/watch?v=CD_t3m2WMM8
 * Rules:
 * - don't manipulate disabling in this or children classes, only from parent form
 */
@UntilDestroy()
export abstract class FormControlValueAccessorAdapter implements ControlValueAccessor, Validator {
  /** Form group */
  abstract formGroup: FormGroup;

  onTouched: () => void = () => {};

  writeValue(val: any): void {
    if (val) {
      this.formGroup.setValue(val, { emitEvent: false });
    }
  }

  registerOnChange(fn: any): void {
    this.formGroup.valueChanges.pipe(untilDestroyed(this)).subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.formGroup.disable() : this.formGroup.enable();
  }

  validate(c: AbstractControl): ValidationErrors | null {
    return this.formGroup.valid
      ? null
      : { invalidForm: { value: this.formGroup.value, message: `Nested form is invalid` } };
  }
}
