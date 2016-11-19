import { Component, OnInit } from '@angular/core';
import { SimService } from './sim.service'

@Component({
  moduleId: module.id,
  selector: 'dw-sim-area',  //wird derzeit nicht verwendet, da direkt geroutet
  templateUrl: 'sim.component.html',
  providers: [SimService ]
})
export class SimComponent {

  constructor(
    private simService: SimService
  ){ }

  ngOnInit() {
    // this.simService.setSimTimer();
    this.startSimulation()
  }

  startSimulation() {
      this.simService.setSimTimer();
  }
}
