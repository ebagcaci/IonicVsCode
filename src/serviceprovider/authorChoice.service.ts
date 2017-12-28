import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Author } from '../entities/Author';


@Injectable()
export class AuthorChoiceService {

    constructor(private http: Http, @Inject('apiUrl') private apiUrl) { }

    getServiceAuthor(seoUrl?: string): Observable<Author[]> {
    
        return this.http.get(this.apiUrl + "/Author")
        .map(r => r.json());
    }


}