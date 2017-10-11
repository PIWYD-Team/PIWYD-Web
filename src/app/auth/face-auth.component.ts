import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';''

@Component({
  selector: 'face-auth-root',
  templateUrl: './face-auth.component.html',
  styleUrls: ['./face-auth.component.css']
})
export class FaceAuthComponent implements OnInit {
    piwydSrc: string = "";
    faceSrc: string = "";
    options = {
        audio: false,
        video: true,
        width: 250,
        height: 250,
        fallbackMode: 'callback',
        fallbackSrc: 'jscam_canvas_only.swf',
        fallbackQuality: 85,
        cameraType: 'front'
    }
    public webcam;
    public base64;

    constructor(private http: Http, private router: Router) {
        this.piwydSrc = 'assets/piwyd.png';
        this.faceSrc = 'assets/face.png';
    }

    genBase64(){
        this.webcam.getBase64()
        .then( base=>this.base64=base)
        .catch( e=>console.error(e) )
      }
     
      //get HTML5 FormData object and pretend to post to server
      genPostData(){
        this.webcam.captureAsFormData({fileName:'file.jpg'})
        .then( formData=>this.postFormData(formData) )
        .catch( e=>console.error(e) )
      }
     
      //a pretend process that would post the webcam photo taken
      postFormData(formData){
        const config = {
          method:"post",
          url:"http://www.aviorsciences.com/",
          body: formData
        }
     
        //const request = new Request(config)
     
        //return this.http.request( request )
      }
     
      onCamError(err){}
     
      onCamSuccess(){}

    ngOnInit() {    
    }
}