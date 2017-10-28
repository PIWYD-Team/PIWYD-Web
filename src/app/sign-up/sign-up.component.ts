import {Component, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'sign-up-root',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {
  piwydSrc = '';
  faceSrc = '';

  constructor(private http: Http, private router: Router) {
    this.piwydSrc = 'assets/piwyd.png';
    this.faceSrc = 'assets/face.png';
  }

  ngOnInit() {
  }
}
