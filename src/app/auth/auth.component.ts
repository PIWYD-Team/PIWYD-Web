import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {AuthService} from './auth.service';

@Component({
  selector: 'auth-root',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {
  title = 'Authentication';
  piwydSrc = '';

  email: string;
  password: string;

  mustRedifinedPw: boolean;
  newPassword: string;
  newPasswordBis: string;

  constructor(private router: Router, private authService: AuthService) {
    this.piwydSrc = 'assets/piwyd.png';
    this.mustRedifinedPw = false;
  }

  ngOnInit() {
  }

  onSubmit() {
    // this.getData();
    // this.refreshData();
    return (this.mustRedifinedPw)
      ? this.loginNewPassword()
      : this.login();
  }

  login() {
    const component = this;

    this.authService.firstStepAuth(this.email, this.password)
      .then(function (data) {
        component.router.navigateByUrl('/face-auth');
      })
      .catch(function (error: Response) {
        // TODO: change the condition to match the status code of the API in case of changing password
        if (error.status === 412) {
          component.mustRedifinedPw = true;
        }
        console.log('Erreur lors de l\'authentification', error);
        return false;
      });
  }

  loginNewPassword() {
    const component = this;

    if (this.newPassword !== this.newPasswordBis) {
      console.log('New passwords don\'t match');
      return false;
    }

    this.authService.firstStepAuthNewPassword(this.email, this.password, this.newPassword)
      .then(function (data) {
        component.router.navigateByUrl('/face-auth');
      })
      .catch(function (error) {
        console.log('Erreur lors de l\'authentification', error);
        return false;
      });
  }

  /*
  getData() {
    return this.http.get(this.apiURL).map((res: Response) => res.json());
  }

  refreshData() {
    this.getData().subscribe(data => {
      this.data = data;
    });
  }
  */
}
