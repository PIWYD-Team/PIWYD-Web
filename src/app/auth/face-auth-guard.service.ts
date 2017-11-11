import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {TokenService} from './token.service';
import {AuthState} from './auth-state.enum';

@Injectable()
export class FaceAuthGuardService implements CanActivate {

  constructor(private router: Router, private tokenService: TokenService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // const url = state.url;

    return this.checkLoginState();
  }

  checkLoginState(): boolean {
    const authState: AuthState = this.tokenService.getTokenState();

    console.log('Try to go to face-auth route. State : ', authState);

    if (AuthState.FIRST_STEP_AUTH.valueOf() === authState.valueOf()) {
      return true;
    } else if (AuthState.FULL_AUTH.valueOf() === authState.valueOf()) {
      this.router.navigate(['/file-manager']);
      return false;
    }

    // If the user has not a token, redirect to the first step login
    this.router.navigate(['/auth']);
    return false;
  }

}
