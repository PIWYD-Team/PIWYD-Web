import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module'

import { SignInComponents } from './sign-in.routes';

@NgModule({
  declarations: [
    SignInComponents,
  ],
  imports: [
    HttpModule,
    CommonModule,
    SharedModule
  ],
  providers: [SignInComponents]
})
export class SignInModule { }
