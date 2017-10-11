import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { WebCamComponent } from 'ack-angular-webcam';

@NgModule({
    declarations: [
        WebCamComponent
    ],
    imports: [
      CommonModule
    ],
    exports: [
        WebCamComponent
    ],
    providers: []
  })
  export class SharedModule { }