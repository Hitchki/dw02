import { Component, OnInit } from '@angular/core';
import { SimService } from './simulations.service'

@Component({
  moduleId: module.id,
  selector: 'simulations',
  templateUrl: 'simulations.component.html',
  providers: [SimService ]
})
export class SimulationsComponent {

  constructor(
    private simService: SimService
  ){ }

  ngOnInit() {
    this.simService.setSimTimer()
  }
}
