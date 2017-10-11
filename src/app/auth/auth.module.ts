import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module'

import { AuthComponents } from './auth.routes';

@NgModule({
  declarations: [
    AuthComponents
  ],
  imports: [
    HttpModule,
    CommonModule,
    SharedModule
  ],
  providers: [AuthComponents]
})
export class AuthModule { }
