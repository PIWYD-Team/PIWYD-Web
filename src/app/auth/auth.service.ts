import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  private FIRST_STEP_URL = '/auth';
  private SECOND_STEP_URL = '/auth2';

  constructor(private http: Http) { }

  public firstStepAuth(username: String, password: String): Promise<any> {
    const params = {
      'username': username,
      'password': password
    };

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({headers: headers, withCredentials: true});

    // TODO: Pass the token in the headers

    return this.http.post(this.FIRST_STEP_URL, params, options)
                    .toPromise()
                    .then(function(response) {

                      // TODO: Save the temp token provided by the server in the session

                      return response.json().data;
                    })
                    .catch(this.handleError);
  }

  public secondStepAuth(picture: any): Promise<any> {
    const params = {
      'picture': picture
    };

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({headers: headers, withCredentials: true});

    return this.http.post(this.SECOND_STEP_URL, params, options)
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
