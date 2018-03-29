import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AeventComponent } from './aevent/aevent.component';
import { AeventsComponent } from './aevents/aevents.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AeventComponent,
    AeventsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
