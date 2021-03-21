import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address-form',
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
    	<pre>{{ formGroup.value | json }}</pre>
    </ng-container>`,
})
export class AddressFormSecondComponent implements OnInit {
  readonly formGroup = new FormGroup({
    city: new FormControl('', [Validators.required]),
    street: new FormControl('', [Validators.required, Validators.minLength(2)]),
  });

  constructor() {}

  ngOnInit(): void {}
}
