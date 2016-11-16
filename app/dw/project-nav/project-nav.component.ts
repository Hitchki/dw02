import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'dw-project-nav',
  templateUrl: 'project-nav.component.html',
  inputs: ['projects']
})
export class ProjectNavComponent implements OnInit {
  // @Input() projects: string;

  constructor() {
  }

  ngOnInit() {
  }
}
