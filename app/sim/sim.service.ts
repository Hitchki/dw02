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

  public simTimer$: any;
  public connection12$: any;
  public connection23$: any;
  public connection31$: any;

  constructor(
    private http: Http
  ) {
    this.setSimTimer();
    this.buildConnectionNodes();
  }

  public subscribeToTimer() {

  }

  public setSimTimer() {
    let source = Observable.interval(1000)
      .take(5)
      .map( x => x * 10)
      .do( () => console.log('lllll'));
    // var source = Observable.range(1, 1000);

    this.simTimer$ = new Subject();
    let subSource = source.subscribe(this.simTimer$);

    // var subSubject1 = this.simTimer$.subscribe(
    //   function (x: any) { console.log('Value published to observer #1: ' + x); },
    //   function (e: any) { console.log('onError: ' + e.message); },
    //   function () { console.log('onCompleted'); });
    //

    setTimeout(() => {
      // Clean up
      this.simTimer$.complete();
      // subSubject1.unsubscribe();
      // subSubject2.unsubscribe();
    }, 5000);
  }

  public buildConnectionNodes() :void {

  }

  public connectNodes( nodeId: number, nodeToConnect: number) :void {
    this.connection12$ = new Subject();
    let subSource1 = this.simTimer$.subscribe(this.connection12$);
    let subSource1r = this.connection23$.subscribe(this.connection12$);
    this.connection23$ = new Subject();
    let subSource2 = this.connection12$.subscribe(this.connection23$);
    this.connection31$ = new Subject();
    let subSource3 = this.connection23$.subscribe(this.connection31$);
  }

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


