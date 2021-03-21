import { Component, Input, OnInit } from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-address-form-first',
  template: `
    <ng-container [formGroup]="parentForm">
    	<ng-container formGroupName="first-address">
    		<div class="field">
    			<label>City</label>
    			<input type="text" formControlName="city" class="" />
    		</div>
    		<div class="field">
    			<label>Street</label>
    			<input type="text" formControlName="street" class="" />
    		</div>
    		<!-- <pre>{{ formGroup?.value | json }}</pre> -->
    	</ng-container>
    </ng-container>`,
})
export class AddressFormFirstComponent implements OnInit {
  @Input() parentForm!: FormGroup;

  readonly formGroup = new FormGroup({
    city: new FormControl('', [Validators.required]),
    street: new FormControl('first-address', [Validators.required, Validators.minLength(2)]),
  });

  ngOnInit(): void {
    this.parentForm.addControl('first-address', this.formGroup);
  }
}
