import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
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

  constructor(private http: Http, private router: Router, private authService: AuthService) {
    this.piwydSrc = 'assets/piwyd.png';
  }

  ngOnInit() {
  }

  onSubmit() {
    // this.getData();
    // this.refreshData();
    const component = this;

    this.authService.firstStepAuth(this.email, this.password)
    .then(function (data) {
      component.router.navigateByUrl('/face-auth');
    })
    .catch(function (error) {
      console.log('Erreur', error);
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
