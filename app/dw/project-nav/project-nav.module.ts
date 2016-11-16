import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { ProjectNavComponent } from './project-nav.component';

@NgModule({
  imports: [BrowserModule],
  exports: [ProjectNavComponent],
  declarations: [
    ProjectNavComponent,
  ],
  providers: [],
})
export class ProjectNavModule {
}
