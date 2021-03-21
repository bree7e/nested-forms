import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressFormComponent } from './forms/address-form.component';
import {
  AddressFormFirstComponent,
  AddressFormSecondComponent,
  AddressFormThirdComponent,
  AddressFormFourthComponent,
  AddressFormFifthComponent,
  AddressFormSixthComponent,
} from './forms';

@NgModule({
  declarations: [
    AppComponent,
    AddressFormComponent,
    AddressFormFirstComponent,
    AddressFormSecondComponent,
    AddressFormThirdComponent,
    AddressFormFourthComponent,
    AddressFormFifthComponent,
    AddressFormSixthComponent
  ],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
