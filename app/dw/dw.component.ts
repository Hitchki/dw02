import { Component, OnInit } from '@angular/core';
import { DwService } from './dw.service';

import { Headers, Http } from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'dw',
  templateUrl: './dw.component.html',
  providers: [ DwService ]
})
export class DwComponent implements OnInit {
  private projects: any;
  private startcontent;
  private content;
  private searchtree;
  private infoContent;

  constructor(
    private dwService: DwService,
    public http: Http
  ){ }

  ngOnInit() {
    this.getData();
  }

  processData(jsonData) {
    let contentPath = ['projects','subprojects', 'contentstart' ];
    this.projects = jsonData.projects;
    console.log('this.projects', this.projects);
    this.startcontent = jsonData[contentPath[0]][0][contentPath[1]][0][contentPath[2]];
    this.content = this.startcontent;
    this.infoContent = undefined;
    console.log('this.startcontent', this.startcontent);
    // this.searchtree = this.startcontent['searchtree'];
    console.log('this.searchtree', this.searchtree);
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
