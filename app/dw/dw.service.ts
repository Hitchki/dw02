import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
// import { Headers, Http } from '@angular/http';

import 'rxjs/operator/toPromise';

@Injectable()
export class DwService {

  private serverUrl: string;

  constructor(
    private http: Http
  ) {
    //serverUrl = './server/php/v1/getDataAjax.php';
    //serverUrl = './server/mockdata/data1.json';
    // this.serverUrl = './server/mockdata/jsonpath1.json';
    this.serverUrl = './server/mockdata/vwl-diskussion.json';
    // this.serverUrl = 'http://jsonplaceholder.typicode.com/photos/1';
  }

  getData(): Observable<any> {
    //alert('abcd');

    // return this.http.get(this.serverUrl)
    // .toPromise()
    //  .then(response => response.json().data as Hero[])
    //  .catch(this.handleError);

    let result = this.http.get(this.serverUrl);
    result.subscribe(
      arg => console.log(arg.json()),
      err => console.log(err)
    );
    return result;

  }
}
