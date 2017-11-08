import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import {TokenService} from '../auth/token.service';

@Injectable()
export class FileManagerService {

  private UPLOAD_URL = 'http://localhost:8080/api/files/upload';

  constructor(private http: Http, private tokenService: TokenService) { }

  public getAllUserFiles() {
    // TODO: récupérer l'id du user dans le token pour la requête
    const user = this.tokenService.getUser();
    console.log(user);
  }

  public uploadFile(file: File): Promise<any> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('userId', this.tokenService.getUser().id);

    const headers = new Headers();
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    const options = new RequestOptions({headers: headers});

    return this.http.post(this.UPLOAD_URL, formData, options)
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
