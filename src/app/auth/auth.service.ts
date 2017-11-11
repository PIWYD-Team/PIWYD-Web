import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {environment} from "../../environments/environment";

@Injectable()
export class AuthService {

  private FIRST_STEP_URL = environment.apiUrl + '/login';
  private FIRST_STEP_NEW_PASSWORD_URL = environment.apiUrl + '/loginNewPassword';
  private SECOND_STEP_URL = environment.apiUrl + '/loginFace';

  constructor(private http: Http) { }

  public firstStepAuth(username: string, password: string): Promise<any> {
    const params = {
      'username': username,
      'password': password
    };

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({headers: headers, withCredentials: false});

    return this.http.post(this.FIRST_STEP_URL, params, options)
                    .toPromise()
                    .then(function(response) {
                      const token: string = response.headers.get('Authorization');
                      localStorage.setItem('token', token.split(' ')[1]);
                      return true;
                    })
                    .catch(this.handleError);
  }

  public firstStepAuthNewPassword(username: string, password: string, newPassword: string) {
    const params = {
      'username': username,
      'password': password,
      'newPassword': newPassword
    };

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({headers: headers, withCredentials: false});

    return this.http.post(this.FIRST_STEP_NEW_PASSWORD_URL, params, options)
      .toPromise()
      .then(function(response) {
        const token: string = response.headers.get('Authorization');
        localStorage.setItem('token', token.split(' ')[1]);
        return true;
      })
      .catch(this.handleError);
  }

  public secondStepAuth(picture: any): Promise<any> {
    const params = {
      'picture': picture
    };

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    const options = new RequestOptions({headers: headers, withCredentials: false});

    return this.http.post(this.SECOND_STEP_URL, params, options)
                    .toPromise()
                    .then(function(response) {
                      const token: string = response.headers.get('Authorization');
                      localStorage.setItem('token', token.split(' ')[1]);
                      return true;
                    })
                    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
