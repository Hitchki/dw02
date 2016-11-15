import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'dw-info-area',
  templateUrl: 'dw-info-area.component.html',
  inputs: ['infoContent']
})
export class DwInfoAreaComponent implements OnInit {
    // @Input() infoContent: string;

    constructor() { }

    ngOnInit() { }

}
