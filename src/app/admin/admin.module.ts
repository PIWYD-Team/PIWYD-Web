import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AdminService} from './admin.service';
import {AdminComponents} from './admin.routes';
import {AdminGuardService} from './admin-guard.service';
import {TokenService} from '../auth/token.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    AdminComponents
  ],
  providers: [
    AdminService,
    AdminGuardService,
    TokenService
  ]
})
export class AdminModule { }
