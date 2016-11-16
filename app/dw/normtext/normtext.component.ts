import {Component, OnInit} from '@angular/core';
// import { Input, Output, EventEmitter } from '@angular/core';

import { DwNormtext  } from '../dw-project.interface';

@Component({
  moduleId: module.id,
  selector: 'dw-normtext',
  templateUrl: 'normtext.component.html',
  inputs: ['content: normtextcontent']
})
export class NormtextComponent implements OnInit {
  // @Input('normtextcontent') private content: string;
  content: DwNormtext;

  constructor() {
  }

  ngOnInit() {
  }
}
