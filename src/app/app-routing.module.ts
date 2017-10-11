import { NgModule } from '@angular/core';
import { RouterModule, Routes }	from '@angular/router';

import { AuthRoute, FaceAuthRoute } from './auth/auth.routes';
import { SignInRoute } from './sign-in/sign-in.routes';

const routes: Routes = [
  AuthRoute,
  SignInRoute,
  FaceAuthRoute,
  { path: '**', redirectTo: '/auth', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}