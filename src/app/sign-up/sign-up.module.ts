import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpComponents } from './sign-up.routes';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    SignUpComponents,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [SignUpComponents]
})
export class SignUpModule { }
