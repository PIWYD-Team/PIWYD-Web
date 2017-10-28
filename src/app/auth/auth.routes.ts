import {AuthComponent} from './auth.component';
import {FaceAuthComponent} from './face-auth.component';

export const AuthRoute = {
  path: 'auth',
  component: AuthComponent,
};

export const FaceAuthRoute = {
  path: 'face-auth',
  component: FaceAuthComponent
};

export const AuthComponents = [
  AuthComponent,
  FaceAuthComponent
];
