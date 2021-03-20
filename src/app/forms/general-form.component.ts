import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-general-form',
  template: `
    <ng-container [formGroup]="formGroup">
    	<div class="row">
    		<label>Name</label>
    		<input type="text" formControlName="name" class="" />
    	</div>
    	<div class="row">
    		<label>E-mail</label>
    		<input type="text" formControlName="email" class="" />
    	</div>
    	<pre>{{ formGroup.value | json }}</pre>
    </ng-container>`,
})
export class GeneralFormComponent implements OnInit {
  formGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor() {}

  ngOnInit(): void {}
}
