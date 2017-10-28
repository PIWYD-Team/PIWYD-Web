import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

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

    return this.http.post(this.FIRST_STEP_URL, params)
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

    return this.http.post(this.SECOND_STEP_URL, params)
                    .toPromise()
                    .then(function(response) {
                      return response.json().data;
                    })
                    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
