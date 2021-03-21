import { Component, OnInit } from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-address-form-sixth',
  template: `
    <ng-container [formGroup]="formGroup">
    	<div class="field">
    		<label>City</label>
    		<input type="text" formControlName="city" class="" />
    	</div>
    	<div class="field">
    		<label>Street</label>
    		<input type="text" formControlName="street" class="" />
    	</div>
    	<!-- <pre>{{ formGroup?.value | json }}</pre>-->
    </ng-container>`,
})
export class AddressFormSixthComponent implements OnInit {
  readonly formGroup = new FormGroup({
    city: new FormControl('', [Validators.required]),
    street: new FormControl('sixth-address', [
      Validators.required,
      Validators.minLength(2),
    ]),
  });

  ngOnInit(): void {}
}
