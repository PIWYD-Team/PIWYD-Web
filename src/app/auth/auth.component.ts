import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'auth-root',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {
  title = 'Authentication';
  piwydSrc: string = "";
  private apiURL = 'https://swapi.co/api/people/1/';
  data: any = {};

  constructor(private http: Http, private router: Router) {
    this.piwydSrc = 'assets/piwyd.png'
  }

  ngOnInit() {    
  }

  onClick() {
    this.getData();
    this.refreshData();
    this.router.navigateByUrl('/face-auth');
  }

  getData() {
    return this.http.get(this.apiURL)
    .map((res: Response) => res.json()); 
  }

  refreshData() {
    this.getData().subscribe(data => {
      this.data = data;
    })
  }
}
