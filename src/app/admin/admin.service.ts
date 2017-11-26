import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Http, RequestOptions, Headers} from '@angular/http';

@Injectable()
export class AdminService {

  private PASSWORD_RULES_URL = environment.apiUrl + '/api/passwordRules';

  constructor(private http: Http) { }

  public getPasswordRules() {
    const headers = new Headers();
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    const options = new RequestOptions({headers: headers});

    return this.http.get(this.PASSWORD_RULES_URL, options)
                    .toPromise()
                    .then(function(response) {
                      return response.json();
                    })
                    .catch(this.handleError);
  }

  public savePasswordRules(requireLowercase: boolean, requireUppercase: boolean, requireNumber: boolean,
                           requireSpecialChar: boolean, minLength: number, expirationTime: number): Promise<any> {
    const params = {
      requireLowercase: requireLowercase,
      requireUppercase: requireUppercase,
      requireNumbers: requireNumber,
      requireSpecialCharacters: requireSpecialChar,
      minLength: minLength,
      expirationTime: expirationTime
    };

    const headers = new Headers();
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    const options = new RequestOptions({headers: headers});

    return this.http.post(this.PASSWORD_RULES_URL, params, options)
                    .toPromise()
                    .then(function(response) {
                      return response.json();
                    })
                    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
