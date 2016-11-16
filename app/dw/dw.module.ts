import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { DwComponent}   from './dw.component';
import { ProjectNavModule } from './project-nav/project-nav.module';
import { ContentModule } from './content/content.module'

// import { DwInfoAreaComponent } from './content/info-area/dw-info-area.component';
import { DwBaseAreaComponent } from './base-area/dw-base-area.component';
// import { DwNormtextComponent } from './normtext/dw-normtext.component';

@NgModule({
  imports: [
    BrowserModule,
    ProjectNavModule,
    ContentModule,
    ContentModule
  ],
  exports: [],
  declarations: [
    DwComponent,
    DwBaseAreaComponent,
    // DwInfoAreaComponent,
    // DwNormtextComponent,
  ],
  providers: [],
})
export class DwModule {
}
