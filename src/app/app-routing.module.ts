import { NgModule } from '@angular/core';
import { RouterModule, Routes }	from '@angular/router';

import { AuthRoute, FaceAuthRoute } from './auth/auth.routes';
import { SignUpRoute } from './sign-up/sign-up.routes';

const routes: Routes = [
  AuthRoute,
  FaceAuthRoute,
  SignUpRoute,
  { path: '**', redirectTo: '/auth', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
