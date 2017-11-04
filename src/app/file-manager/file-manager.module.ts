import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FileManagerComponents} from './file-manager.routes';
import {FileManagerGuardService} from './file-manager-guard.service';

@NgModule({
  declarations: [
    FileManagerComponents
  ],
  imports: [
    CommonModule
  ],
  providers: [
    FileManagerComponents,
    FileManagerGuardService
  ]
})
export class FileManagerModule { }
