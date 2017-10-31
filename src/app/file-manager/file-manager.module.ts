import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FileManagerComponents} from './file-manager.routes';

@NgModule({
  declarations: [
    FileManagerComponents
  ],
  imports: [
    CommonModule
  ],
  providers: [
    FileManagerComponents
  ]
})
export class FileManagerModule { }
