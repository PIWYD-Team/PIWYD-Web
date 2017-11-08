import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FileManagerComponents} from './file-manager.routes';
import {FileManagerGuardService} from './file-manager-guard.service';
import {TokenService} from '../auth/token.service';
import {FormsModule} from '@angular/forms';
import {FileManagerService} from './file-manager.service';

@NgModule({
  declarations: [
    FileManagerComponents
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    FileManagerService,
    TokenService,
    FileManagerGuardService
  ]
})
export class FileManagerModule { }
