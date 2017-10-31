import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {SharedModule} from './shared/shared.module';

import {AuthModule} from './auth/auth.module';
import {SignUpModule} from './sign-up/sign-up.module';
import {FileManagerModule} from './file-manager/file-manager.module';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    AuthModule,
    BrowserModule,
    RouterModule,
    SignUpModule,
    SharedModule,
    HttpModule,
    FileManagerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
