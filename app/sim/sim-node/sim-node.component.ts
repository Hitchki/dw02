import { Component, OnInit } from '@angular/core';
import { SimService } from '../sim.service'

@Component({
  moduleId: module.id,
  selector: 'dw-sim-node',  //wird derzeit nicht verwendet, da direkt geroutet
  templateUrl: 'sim-node.component.html',
  providers: [SimService ],
  inputs: ['simid']
})
export class SimNodeComponent {
  private simid: number;
  private result: string;

  constructor(
    private simService: SimService
  ){ }

  ngOnInit() {
    this.subscribeToTimer()
  }

  subscribeToTimer() {
    var subSubject = this.simService.simTimer$.subscribe(
      (x: any) => {
        this.result = `Timerticks #${this.simid}: ${x}`;
        console.log(this.result);
      },
      (e: any) =>  { console.log('onError: ' + e.message); },
      () =>  { console.log('onCompleted'); });
  }

  connectToNode () : void {
      // this.simService.
  }
}
