import {
  AbstractControl,
  ValidationErrors,
  FormControl,
  FormGroup,
} from '@angular/forms';

/**
 * Get all errors of FormGroup
 * @param control - target form control
 */
export function getControlErrors(
  control: AbstractControl | null
): ValidationErrors | null {
  if (control instanceof FormControl) {
    // Return FormControl errors or null
    return control.errors ?? null;
  }
  if (control instanceof FormGroup) {
    const groupErrors = control.errors;
    // Form group can contain errors itself, in that case add'em
    const formErrors: ValidationErrors = groupErrors ? { groupErrors } : {};
    Object.keys(control.controls).forEach((key) => {
      // Recursive call of the FormGroup fields
      const error = getControlErrors(control.get(key));
      if (error !== null) {
        // Only add error if not null
        formErrors[key] = error;
      }
    });
    // Return FormGroup errors or null
    return Object.keys(formErrors).length > 0 ? formErrors : null;
  }
  return null;
}
