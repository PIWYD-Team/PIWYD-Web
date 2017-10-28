import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {AuthComponents} from './auth.routes';

import {AuthService} from './auth.service';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    AuthComponents
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    AuthComponents,
    AuthService
  ]
})
export class AuthModule {
}
