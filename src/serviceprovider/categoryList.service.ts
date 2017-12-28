import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { CategoryList } from '../entities/categoryList';

@Injectable()
export class CategoryListService {

  constructor(private http: Http, @Inject('apiUrl') private apiUrl) { }

  getServiceCategoryList(seoUrl?: string): Observable<CategoryList[]> {
   console.log('seourl'+ seoUrl)
    if (seoUrl) {
      return this.http.get(this.apiUrl + "/CategoryList/" + seoUrl)
        .map(r => r.json());
    }
    else {
      return this.http.get(this.apiUrl + "/CategoryList")
        .map(r => r.json());
    }

  }

}