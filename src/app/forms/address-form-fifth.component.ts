import {
  Component,
  OnInit,
  Optional,
} from '@angular/core';
import {
  FormGroup,
  FormGroupDirective,
  FormGroupName,
} from '@angular/forms';

@Component({
  selector: 'app-address-form-fifth',
  template: `
    <ng-container *ngIf="formGroup" [formGroup]="formGroup">
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
export class AddressFormFifthComponent implements OnInit {
  formGroup?: FormGroup;

  constructor(
    private parentForm: FormGroupDirective,
    @Optional() private formGroupName: FormGroupName
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formGroupName?.name
      ? (this.parentForm.form.controls[this.formGroupName.name] as FormGroup)
      : this.parentForm.form;
  }
}
