import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

export const DEBUG = false;

@Injectable()
export class AppConfig {

    private config: Object = null;

    constructor(private http: Http) {}

    /**
     * Use to get the data found in the second file (config file)
     */
     public getConfig(key: any) {
         if (this.config.hasOwnProperty(key)) {
             return this.config[key];
         }
         return '';
     }

    /**
     * This method:
     *   b) Loads "config.[env].json" to get all env's variables (e.g.: 'config.development.json')
     */
     public load() {
         return new Promise((resolve, reject) => {
             this.http.get('../assets/config.json')
             .map(res => {
                 return res.json();
             })
             .catch((error: any):any => {
                 resolve(true);
                 return Observable.throw(error.json().error || 'Server error');
             }).subscribe((confResponse) => {
                 this.config = confResponse;
                 resolve(true);
             });
         });
     }
 }
