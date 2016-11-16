import { NgModule } from '@angular/core';

import { NormtextComponent }   from './normtext/normtext.component';
import {BrowserModule} from "@angular/platform-browser";
// import { BaseAreaComponent }   from './base-area/base-area.component';

@NgModule({
  imports: [BrowserModule],
  exports: [
    NormtextComponent,
    // BaseAreaComponent
  ],
  declarations: [
    NormtextComponent,
    // BaseAreaComponent
  ],
  providers: [],
})
export class ContentitemModule {
}

