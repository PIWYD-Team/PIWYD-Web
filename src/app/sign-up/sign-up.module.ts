import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpComponents } from './sign-up.routes';
import {SharedModule} from '../shared/shared.module';
import {TokenService} from '../auth/token.service';
import {SignUpService} from './sign-up.service';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    SignUpComponents,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  providers: [
    TokenService,
    SignUpService
  ]
})
export class SignUpModule { }
