import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { IContact } from '../Models';
import { Global } from '../Shared';

@Injectable()
export class ContactService {
    constructor(private _http : Http) { 

    };

    get(): Observable<IContact[]> { 
        return this._http.get(Global.CONTACTS_ENDPOINT)
            .map((response: Response) => <IContact[]>response.json())
            .do(data => console.log("Contact Service: " + data)) // Debug
            .catch(this.handleExceptions);
    };

    private handleExceptions(err: any) {
        console.log('sever error:', err);  // Debug
        
        if(err instanceof Response) {
            return Observable.throw(err.json().error || 'backend server error');
        }

        return Observable.throw(err || 'backend server error');
    };
};