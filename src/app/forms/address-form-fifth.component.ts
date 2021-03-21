import {
  Component,
  EventEmitter,
  OnInit,
  Optional,
  Output,
} from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroup,
  FormGroupDirective,
  FormGroupName,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-address-form-fifth',
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
export class AddressFormFifthComponent implements OnInit {
  readonly formGroup: FormGroup = this.formGroupName?.name
    ? (this.parentForm.form.controls[this.formGroupName.name] as FormGroup)
    : this.parentForm.form;

  constructor(
    private parentForm: FormGroupDirective,
    @Optional() private formGroupName: FormGroupName
  ) {}

  ngOnInit(): void {}
}
