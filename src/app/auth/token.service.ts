import { Injectable } from '@angular/core';
import {AuthState} from './auth-state.enum';
import {JwtHelper} from 'angular2-jwt';


@Injectable()
export class TokenService {

  constructor(private jwtHelper: JwtHelper) { }

  getTokenState(): AuthState {
    const token = localStorage.getItem('token');

    if (token) {
      const decoded = this.jwtHelper.decodeToken(token);

      return decoded.authenticationStatus;
    }

    return AuthState.NO_AUTH;
  }
}
