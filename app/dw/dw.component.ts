import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

import { DwService } from './dw.service';
import { DwProjects, DwContent, DwSearchtree } from './dw-project.interface';

@Component({
  moduleId: module.id,
  selector: 'dw',
  templateUrl: './dw.component.html',
  providers: [ DwService ],
  styleUrls: [ './dw.component.css' ]
})
export class DwComponent implements OnInit {
  projects: DwProjects;
  startcontent: DwContent;
  content: DwContent;
  searchtree: DwSearchtree;
  infoContent: DwContent;
  dwpath: string;

  constructor(
    private dwService: DwService,
    private route: ActivatedRoute,
    private http: Http
  ){
    this.dwpath = this.route.snapshot.params['dwpath'];
    // console.log('dwpath', this.dwpath);
  }

  ngOnInit() {
    this.getData();
  }

  processData1(jsonData: any) {
    let contentPath = ['projects','subprojects', 'contentstart' ];
    this.projects = jsonData.projects;
    this.startcontent = jsonData[contentPath[0]][0][contentPath[1]][0][contentPath[2]];
    this.content = this.startcontent;
    this.infoContent = this.content;
  }

  processData(jsonData: any) {
    let contentPath = ['projects','subprojects', 'contentstart' ];
    this.projects = jsonData.projects;
    this.startcontent = jsonData[contentPath[0]][0][contentPath[1]][0][contentPath[2]];
    this.content = this.startcontent;
    this.infoContent = this.content;
  }

  getData() {
    let dataResult = this.dwService.getData();
    dataResult
      .subscribe(
        arg => this.processData(arg.json()),
        err => console.log(err)
      );


    // let result = this.http.get('http://jsonplaceholder.typicode.com/photos/1');
    // result.subscribe(
    //   arg => console.log(arg.json()),
    //   err => console.log(err)
    // );
    // return result;
  }
}
