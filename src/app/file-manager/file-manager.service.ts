import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers, ResponseContentType} from '@angular/http';
import {TokenService} from '../auth/token.service';

@Injectable()
export class FileManagerService {

  private PREFIX_URL = 'http://localhost:8080/api/files';
  private ALL_FILES_URL: string = this.PREFIX_URL + '/users/';
  private UPLOAD_URL: string = this.PREFIX_URL + '/upload';
  private DOWNLOAD_URL: string = this.PREFIX_URL + '/download/';

  constructor(private http: Http, private tokenService: TokenService) { }

  public getAllUserFiles(): Promise<any> {
    const user = this.tokenService.getUser();
    console.log(user);

    const headers = new Headers();
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    const options = new RequestOptions({headers: headers});

    return this.http.get(this.ALL_FILES_URL + user.id, options)
                    .toPromise()
                    .then(function(response) {
                      return response.json();
                    })
                    .catch(this.handleError);
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
                      return response.json();
                    })
                    .catch(this.handleError);
  }

  public downloadFile(fileId): Promise<any> {
    const headers = new Headers();
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    const options = new RequestOptions({headers: headers, responseType: ResponseContentType.Blob});

    return this.http.get(this.DOWNLOAD_URL + fileId, options)
                    .toPromise()
                    .then(function(response) {
                      return response.blob();
                    })
                    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
