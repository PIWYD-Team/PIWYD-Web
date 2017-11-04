import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthState} from '../auth/auth-state.enum';
import {TokenService} from '../auth/token.service';

@Injectable()
export class FileManagerGuardService implements CanActivate {

  constructor(private router: Router, private tokenService: TokenService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkLoginState();
  }

  checkLoginState(): boolean {
    const authState: AuthState = this.tokenService.getTokenState();

    console.log('Try to go to file-manager route. State : ', authState);

    if (AuthState.NO_AUTH === authState) {
      // If the user has not a token, redirect to the first step login
      this.router.navigate(['/auth']);
    } else if (AuthState.FIRST_STEP_AUTH === authState) {
      this.router.navigate(['/face-auth']);
    }

    return true;
  }
}
