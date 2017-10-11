import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
    selector: 'sign-in-root',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.css']
  })

  export class SignInComponent implements OnInit {
      
    ngOnInit() {
      }
  }