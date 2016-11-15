import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { DwComponent}   from './dw.component';
import { DwProjectNavComponent } from './dw-project-nav.component';
import { DwInfoAreaComponent } from './info-area/dw-info-area.component';
import { DwBaseAreaComponent } from './base-area/dw-base-area.component';

@NgModule({
  imports: [BrowserModule],
  exports: [],
  declarations: [
    DwComponent,
    DwProjectNavComponent,
    DwBaseAreaComponent,
    DwInfoAreaComponent,
  ],
  providers: [],
})
export class DwModule {
}
