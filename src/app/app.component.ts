import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddressFormSixthComponent } from './forms';
import { getControlErrors } from './utils/get-control-erros.function';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild(AddressFormSixthComponent, { static: true })
  readonly viewChildFormComponent!: AddressFormSixthComponent;
  readonly title = 'Nested Forms';
  readonly getControlErrors = getControlErrors;
  readonly formGroup = new FormGroup({
    name: new FormControl('Sherlock ', [Validators.required]),
    email: new FormControl('Holmes', [Validators.required, Validators.email]),
    // xxx-address are nested forms
    'third-address': new FormControl({
      city: '',
      street: 'third-address',
    }),
    'fifth-address': new FormGroup({
      city: new FormControl('', [Validators.required]),
      street: new FormControl('fifth-address', [
        Validators.required,
        Validators.minLength(2),
      ]),
    }),
  });

  addChildFormGroup(formGroup: FormGroup): void {
    this.formGroup.addControl('fourth-address', formGroup);
  }

  ngOnInit(): void {
    this.formGroup.addControl('sixth-address', this.viewChildFormComponent.formGroup);
  }
}
