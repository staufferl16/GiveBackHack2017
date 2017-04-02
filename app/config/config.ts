import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
 export class Config {
    private config: Object;
    private env: Object;

    constructor(private http: Http) {}

    getEnv(key: any): any {
        return this.env[key];
    }

    getConfig(): Object {
        return this.config;
    }

    getUrl(): string {
        return this.get('host')+':'+this.get('port');
    }

    get(key: any) {
        return this.config[key];
    }

    public load(): Promise<Object> {
        return new Promise((resolve, reject) => {
          this.config = {
            'host':'http://localhost',
            'port':'5000/flask'
          };
          return resolve(true);
        })
    }

    //TODO: Be sure to uncomment what is commented when bugs are fixed so it actually reads from the correct config file.
    // public load(): Promise<Object> {
    //     return new Promise((resolve, reject) => {
    //         this.http.get('env.json').map( res => res.json() )
    //             .subscribe( (envResponse) => {
    //                 this.env = 'development';
    //                 // this.env = envResponse;
    //                 let request:any = null;
    //
    //                 switch (envResponse.env) {
    //                     case 'production': {
    //                         request = this.http.get('config.' + envResponse.env + '.json');
    //                     } break;
    //
    //                     case 'development': {
    //                         request = this.http.get('config.' + envResponse.env + '.json');
    //                     } break;
    //
    //                     case 'default': {
    //                         console.error('Environment file is not set or invalid');
    //                         resolve(true);
    //                     } break;
    //                 }
    //
    //                 if (request) {
    //                     request
    //                         .map( res => {
    //                             this.config = {'host':'localhost','port':'5000'};
    //                             // this.config = res.json();
    //                         } )
    //                         .catch((error: any) => {
    //                             console.error('Error reading ' + envResponse.env + ' configuration file');
    //                             resolve(error);
    //                             return Observable.throw(error.json().error || 'Server error');
    //                         })
    //                         .subscribe((responseData) => {
    //                             resolve(true);
    //                         });
    //                 } else {
    //                     console.error('Env config file "env.json" is not valid');
    //                     resolve(true);
    //                 }
    //         });
    //     });
    // }
}
