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

  constructor(
    private simService: SimService
  ){ }

  ngOnInit() {
    // this.simService.setSimTimer()
  }
}
