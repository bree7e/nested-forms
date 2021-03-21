import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';

import { FormControlValueAccessorAdapter } from '../utils/form-control-value-accessor-connector';

@Component({
  selector: 'app-address-form-third',
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
    </ng-container>`,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: AddressFormThirdComponent,
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: AddressFormThirdComponent,
      multi: true,
    },
  ],
})
export class AddressFormThirdComponent
  extends FormControlValueAccessorAdapter
  implements OnInit {
  readonly formGroup = new FormGroup({
    city: new FormControl('', [Validators.required]),
    street: new FormControl('', [Validators.required, Validators.minLength(2)]),
  });

  ngOnInit(): void {}
}
