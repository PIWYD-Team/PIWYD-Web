import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AuthModule } from './auth/auth.module';
import { SignInModule } from './sign-in/sign-in.module';

@NgModule({
  declarations: [
    AppComponent,     
  ],
  imports: [
    AppRoutingModule,
    AuthModule,
    BrowserModule,
    RouterModule,
    SignInModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
