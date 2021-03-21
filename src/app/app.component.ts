import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { getControlErrors } from './utils/get-control-erros.function';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly title = 'Nested Forms';
  readonly formGroup = new FormGroup({
    name: new FormControl('Sherlock ', [Validators.required]),
    email: new FormControl('Holmes', [Validators.required, Validators.email]),
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

  getControlErrors = getControlErrors;

  addChildFormGroup(formGroup: FormGroup): void {
    this.formGroup.addControl('fourth-address', formGroup);
  }
}
