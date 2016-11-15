import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'dw-project-nav',
  templateUrl: './dw-project-nav.component.html',
  // inputs: ['projects']
})
export class DwProjectNavComponent implements OnInit {
  @Input() projects: string;

  constructor() {
  }

  ngOnInit() {
  }
}
