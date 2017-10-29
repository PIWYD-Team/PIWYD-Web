import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {AuthComponents} from './auth.routes';

import {AuthService} from './auth.service';
import {SharedModule} from '../shared/shared.module';
import {TokenService} from './token.service';
import {FaceAuthGuardService} from './face-auth-guard.service';

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
    AuthService,
    TokenService,
    FaceAuthGuardService
  ]
})
export class AuthModule {
}
