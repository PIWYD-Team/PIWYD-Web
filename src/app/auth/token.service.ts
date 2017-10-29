import { Injectable } from '@angular/core';
import {AuthState} from './auth-state.enum';

@Injectable()
export class TokenService {

  constructor() { }

  getTokenState(): AuthState {
    // TODO: Check token state.
    return AuthState.NO_AUTH;
  }
}
