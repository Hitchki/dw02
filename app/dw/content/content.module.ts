import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { InfoAreaComponent }   from './info-area/info-area.component';
import { BaseAreaComponent }   from './base-area/base-area.component';
import { ContentitemModule }   from './contentitem/contentitem.module';

@NgModule({
  imports: [
    ContentitemModule,
    BrowserModule
    // FormsModule,
    // AppRoutingModule,
    // HttpModule,
  ],
  exports: [
    InfoAreaComponent,
    BaseAreaComponent
  ],
  declarations: [
    InfoAreaComponent,
    BaseAreaComponent
  ],
  providers: [],
})
export class ContentModule {
}

