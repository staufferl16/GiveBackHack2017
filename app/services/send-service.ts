import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';

// import 'file-saver';
import {DacaUser} from './daca-user';

@Injectable()
export class DacaUserService {

    private headers = new Headers(function(){
    return [
      {'Content-Type': 'application/json'},
      {'Access-Control-Allow-Headers':'Content-Type'},
      {'Access-Control-Allow-Origin':'*'}]
    });

    urlString = 'http://demo.dacatime.com/api';

    constructor(private http:Http) { }

    sendUserDataToBackend(sentUser: DacaUser): any {
        const url = `${this.urlString}`;
        let postHeaders = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers:postHeaders});
        let body = JSON.stringify({form:sentUser});
        return this.http
            .post(url,body,options)
            .subscribe(data => this.downloadFile(data))
    };

            // .then(response => {
            //     const body = response.blob();
            //     saveAs(body, 'filled-out-i-821d.pdf');
            // })
            // .catch(this.handleError);

    private downloadFile(data: Response): void {
        var blob = new Blob([data], { type: 'text/csv' });
        var url= window.URL.createObjectURL(blob);
        window.open(url);
    }

    private handleError(error: Response | any): any {
        let errMsg: string;
        if (error instanceof Response) {
          const body = error.json() || 'There was an error getting team member information';
          const err = body.error || JSON.stringify(body);
          errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
          errMsg = error.message ? error.message : error.toString();
        }
        return Promise.reject(errMsg);
    };

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }
}