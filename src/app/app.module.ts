import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { SatelliteListComponent } from './satellite-list/satellite-list.component';
import { SatelliteDetailsComponent } from './satellite-details/satellite-details.component';

import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    SatelliteListComponent,
    SatelliteDetailsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        GraphQLModule,
        HttpClientModule,
        MatCardModule,
        MatGridListModule,
        MatPaginatorModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
