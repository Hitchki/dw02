import {Component, OnInit} from '@angular/core';
// import { Input, Output, EventEmitter } from '@angular/core';

import { DwNormtext  } from '../dw-project.interface';

@Component({
  moduleId: module.id,
  selector: 'dw-normtext',
  templateUrl: 'dw-normtext.component.html',
  inputs: ['content: normtextcontent']
})
export class DwNormtextComponent implements OnInit {
  // @Input('normtextcontent') private content: string;
  content: DwNormtext;

  constructor() {
  }

  ngOnInit() {
  }
}
