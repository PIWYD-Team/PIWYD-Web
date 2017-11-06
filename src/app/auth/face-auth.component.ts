import {Component, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';
import {AuthService} from './auth.service';

@Component({
  selector: 'face-auth-root',
  templateUrl: './face-auth.component.html',
  styleUrls: ['./face-auth.component.css']
})

export class FaceAuthComponent implements OnInit {
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
  public webcam;

  constructor(private http: Http, private router: Router, private authService: AuthService) {
    this.piwydSrc = 'assets/piwyd.png';
    this.faceSrc = 'assets/face.png';
  }

  validLogin() {
    const component = this;

    this.webcam.getBase64()
      .then(function(base) {
        component.authService.secondStepAuth(base)
        .then(function(data) {
          component.router.navigateByUrl('/file-manager');
        })
        .catch(function (err) {
          console.log('Erreur', err);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  // get HTML5 FormData object and pretend to post to server
  genPostData() {
    this.webcam.captureAsFormData({fileName: 'file.jpg'})
      .then(formData => this.postFormData(formData))
      .catch(e => console.error(e));
  }

  // a pretend process that would post the webcam photo taken
  postFormData(formData) {
    const config = {
      method: 'post',
      url: 'http://site.com/',
      body: formData
    };

    console.log(formData);

    // const request = new Request(config)
    // return this.http.request( request )
  }

  onCamError(err) {
  }

  onCamSuccess() {
  }

  ngOnInit() {
  }
}
