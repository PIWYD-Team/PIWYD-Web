import {Component, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';
import {SignUpService} from "./sign-up.service";

@Component({
  selector: 'sign-up-root',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {
  piwydSrc = '';
  faceSrc = '';

  options = {
    audio: false,
    video: true,
    width: 250,
    height: 250,
    fallbackMode: 'callback',
    fallbackSrc: 'jscam_canvas_only.swf',
    fallbackQuality: 85,
    cameraType: 'front'
  };
  webcam;

  email: string;
  password: string;
  passwordBis: string;
  picture: string;

  constructor(private http: Http, private router: Router, private signupService: SignUpService) {
    this.piwydSrc = 'assets/piwyd.png';
    this.faceSrc = 'assets/face.png';
  }

  ngOnInit() {
  }

  onSubmit() {
    const component = this;

    if (!this.picture || this.password !== this.passwordBis) {
      console.log('Invalid form');
      return false;
    }

    this.signupService.signup(this.email, this.password, this.picture)
    .then(function(data) {
      component.router.navigateByUrl('/file-manager');
    })
    .catch(function(err) {
      console.log('Error while trying to signup');
      return false;
    });

    return true;
  }

  takePicture() {
    const component = this;

    this.webcam.getBase64()
      .then(function(base) {
        component.picture = base;
        console.log('picture taken !');
      })
      .catch(e => console.error(e));
  }

  onCamSuccess() {
  }

  onCamError(err) {
  }
}
