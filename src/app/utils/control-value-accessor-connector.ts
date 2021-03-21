import { Directive, Injector, Input, ViewChild } from '@angular/core';
import {
  ControlContainer,
  ControlValueAccessor,
  FormControl,
  FormControlDirective,
} from '@angular/forms';

/**
 * @see https://medium.com/angular-in-depth/dont-reinvent-the-wheel-when-implementing-controlvalueaccessor-a0ed4ad0fafd
 */
@Directive()
export class ControlValueAccessorAdapterDirective
  implements ControlValueAccessor {
  @ViewChild(FormControlDirective, { static: true })
  formControlDirective?: FormControlDirective;

  @Input()
  formControl?: FormControl;

  @Input()
  formControlName!: string;

  get control(): FormControl | null | undefined {
    return (
      this.formControl ||
      (this.controlContainer.control?.get(this.formControlName) as FormControl)
    );
  }

  constructor(private injector: Injector) {}

  get controlContainer(): ControlContainer {
    return this.injector.get(ControlContainer);
  }

  registerOnTouched(fn: any): void {
    this.formControlDirective?.valueAccessor?.registerOnTouched(fn);
  }

  registerOnChange(fn: any): void {
    this.formControlDirective?.valueAccessor?.registerOnChange(fn);
  }

  writeValue(obj: any): void {
    this.formControlDirective?.valueAccessor?.writeValue(obj);
  }

  setDisabledState(isDisabled: boolean): void {
    this.formControlDirective?.valueAccessor?.setDisabledState?.(isDisabled);
  }
}
