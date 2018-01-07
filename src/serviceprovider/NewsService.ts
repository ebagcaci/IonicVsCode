import { Injectable, Inject } from '@angular/core';
import { Http, RequestOptions,Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { NewsList } from '../entities/categoryList';
import { Author } from '../entities/Author';

@Injectable()
export class NewsService {

  constructor(private http: Http, @Inject('apiUrl') private apiUrl) { }


  getServiceNewsList(author: Author[]): Observable<NewsList[]> {

    console.log('seourl'+ JSON.stringify(author))    
   
     let headers = new Headers();
     headers.append('Content-Type', 'application/json');

     return this.http.post(this.apiUrl + "/NewsService/", JSON.stringify(author), { headers: headers }) 
     .map(r => r.json());
       //return this.http.get(this.apiUrl + "/NewsService/" + author)
        //.map(r => r.json());
      //  return this.http.post(this.apiUrl + "/NewsService/", JSON.stringify(author),options)
       // .map(r => r.json());
    // .then();
   }

  getServiceNewsListeski(author: Author[]): Observable<NewsList[]> {
   console.log('seourl'+ author)
    
      return this.http.get(this.apiUrl + "/NewsService/" + author)
        .map(r => r.json());
   
  }

}