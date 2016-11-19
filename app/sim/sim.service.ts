import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Http, Response } from '@angular/http';

// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/timeInterval';

// import 'rxjs/add/observable/range';
// import 'rxjs/add/operator/range';
// import 'rxjs/operator/range';

// import 'rxjs/operator/interval';
// import Rx from "rxjs/Rx";
// import * as Rx from 'rxjs';

// require('rxjs/add/observable/range');

@Injectable()
export class SimService {

  constructor(
    private http: Http
  ) {
    // this.setSimTimer();
  }

//   setSimTimer1() {
//     var subject = new Subject();
//
//     var subscription = subject.subscribe(
//       function (x) { console.log('onNext: ' + x); },
//       function (e) { console.log('onError: ' + e.message); },
//       function () { console.log('onCompleted'); });
//
//     subject.next(1);
// // => onNext: 1
//
//     subject.next(2);
// // => onNext: 2
//
//     subject.complete();
// // => onCompleted
//
//     //subscription.();
//   }

  public setSimTimer() {
    var source = Observable.interval(1000);
    // var source = Observable.range(1, 1000);

    // console.log('source', source);

    var simTimer = new Subject();
    var subSource = source.subscribe(simTimer);

    var subSubject1 = simTimer.subscribe(
      function (x: any) { console.log('Value published to observer #1: ' + x); },
      function (e: any) { console.log('onError: ' + e.message); },
      function () { console.log('onCompleted'); });

    var subSubject2 = simTimer.subscribe(
      function (x: any) { console.log('Value published to observer #2: ' + x); },
      function (e: any) { console.log('onError: ' + e.message); },
      function () { console.log('onCompleted'); });

    setTimeout(function () {
      // Clean up
      simTimer.complete();
      subSubject1.unsubscribe();
      subSubject2.unsubscribe();
  }, 5000);
  }

}


