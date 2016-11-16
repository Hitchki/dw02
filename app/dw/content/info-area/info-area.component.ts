import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'dw-info-area',
  templateUrl: 'info-area.component.html',
  inputs: ['infocontent']
})
export class InfoAreaComponent implements OnInit {
    // @Input() infoContent: string;

    constructor() { }

    ngOnInit() { }

}
