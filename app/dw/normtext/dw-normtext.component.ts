import {Component, OnInit} from '@angular/core';
// import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'dw-normtext',
  templateUrl: 'dw-normtext.component.html',
  inputs: ['content: normtextcontent']
})
export class DwNormtextComponent implements OnInit {
  // @Input('normtextcontent') private content: string;
  content: string;

  constructor() {
  }

  ngOnInit() {
  }
}
