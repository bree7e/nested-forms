import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressFormComponent } from './forms/address-form.component';
import { AddressFormFirstComponent } from './forms/address-form-first.component';
import { AddressFormSecondComponent } from './forms/address-form-second.component';
import { AddressFormThirdComponent } from './forms/address-form-third.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressFormComponent,
    AddressFormFirstComponent,
    AddressFormSecondComponent,
    AddressFormThirdComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
