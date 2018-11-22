import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { MainSearchComponent } from './main-search/main-search.component';
import { AdvertListComponent } from './advert-list/advert-list.component';
import { SidenavComponent } from './sidenav/sidenav.component';


import { AgmCoreModule } from '@agm/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutes } from './app.routing';
import { MaterialModule } from './material/material.module';
import { AnimalService } from './shared/animal.service';
import { AdvertItemComponent } from './advert-list/advert-item/advert-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddPopupComponent } from './map/add-popup/add-popup.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MainSearchComponent,
    AdvertListComponent,
    SidenavComponent,
    AdvertItemComponent,
    AddPopupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutes,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoiaGVsZGV2IiwiYSI6ImNqb3IyOXRueTA5angzcW4yZ3A0c2tmdzAifQ.uy44VYJlEiqajYgXDamA1w',
      geocoderAccessToken: 'pk.eyJ1IjoiaGVsZGV2IiwiYSI6ImNqb3IyOXRueTA5angzcW4yZ3A0c2tmdzAifQ.uy44VYJlEiqajYgXDamA1w'
    }),
   // LeafletModule.forRoot()
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyBT66Pto2PbxwkiVQl5g3fyIyyZJ8NvKH8'
    // })
  ],
  entryComponents: [AddPopupComponent],
  providers: [AnimalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
