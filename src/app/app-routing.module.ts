import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SatelliteListComponent } from './satellite-list/satellite-list.component';
import { SatelliteDetailsComponent } from './satellite-details/satellite-details.component';

const routes: Routes = [
  {
    path: '',
    component: SatelliteListComponent
  },
  {
    path: ':id',
    component: SatelliteDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
