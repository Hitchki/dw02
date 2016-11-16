import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'dw-base-area',
    templateUrl: 'dw-base-area.component.html',
    // inputs: ['contact']
})
export class BaseAreaComponent implements OnInit {
  @Input() content: string;

    constructor() { }

    ngOnInit() { }

}
