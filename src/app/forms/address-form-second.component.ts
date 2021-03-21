import { Component, OnInit } from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-address-form-second',
  template: `
    <ng-container formGroupName="second-address">
    	<div class="field">
    		<label>City</label>
    		<input type="text" formControlName="city" class="" />
    	</div>
    	<div class="field">
    		<label>Street</label>
    		<input type="text" formControlName="street" class="" />
    	</div>
    	<!-- <pre>{{ formGroup?.value | json }}</pre> -->
    </ng-container>`,
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
})
export class AddressFormSecondComponent implements OnInit {
  readonly formGroup = new FormGroup({
    city: new FormControl('', [Validators.required]),
    street: new FormControl('', [Validators.required, Validators.minLength(2)]),
  });

  constructor(private parentForm: FormGroupDirective) {}

  ngOnInit(): void {
    this.parentForm.form.addControl('second-address', this.formGroup);
  }
}
