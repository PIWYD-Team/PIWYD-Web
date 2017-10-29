import {AuthComponent} from './auth.component';
import {FaceAuthComponent} from './face-auth.component';
import {FaceAuthGuardService} from './face-auth-guard.service';

export const AuthRoute = {
  path: 'auth',
  component: AuthComponent,
};

export const FaceAuthRoute = {
  path: 'face-auth',
  component: FaceAuthComponent,
  canActivate: [FaceAuthGuardService]
};

export const AuthComponents = [
  AuthComponent,
  FaceAuthComponent
];
