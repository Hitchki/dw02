import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import './rxjs-extensions';
import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { HeroService } from './hero.service';
import { HeroSearchComponent } from './hero-search.component';

import { DwModule } from './dw/dw.module';

import { DwComponent } from './dw/dw.component';
import { DwProjectNavComponent } from './dw/dw-project-nav.component';
import { DwInfoAreaComponent } from './dw/content/info-area/dw-info-area.component';
import { DwBaseAreaComponent } from './dw/content/base-area/dw-base-area.component';

import { SimulationsComponent } from './simulations/simulations.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 600 })

    DwModule
  ],
  declarations: [
    AppComponent,
    HeroSearchComponent,
    routedComponents,
    // DwComponent,
    // DwProjectNavComponent,
    // DwBaseAreaComponent,
    // DwInfoAreaComponent,

    SimulationsComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
