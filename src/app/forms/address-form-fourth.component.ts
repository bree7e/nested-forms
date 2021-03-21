import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-address-form-fourth',
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
export class AddressFormFourthComponent implements OnInit {
  readonly formGroup = new FormGroup({
    city: new FormControl('', [Validators.required]),
    street: new FormControl('', [Validators.required, Validators.minLength(2)]),
  });

  @Output() formReady = new EventEmitter<FormGroup>();

  ngOnInit(): void {
    this.formReady.emit(this.formGroup);
  }
}
