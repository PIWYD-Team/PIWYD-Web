import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';

@Injectable()
export class SignUpService {

  private SIGN_UP_URL = 'http://localhost:8080/api/users';

  constructor(private http: Http) { }

  public signup(email: string, password: string, picture: any): Promise<any> {
    const params = {
      'email': email,
      'password': password,
      'picture': picture
    };

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({headers: headers, withCredentials: false});

    return this.http.post(this.SIGN_UP_URL, params, options)
                    .toPromise()
                    .then(function(response) {
                      return response.json().data;
                    })
                    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
