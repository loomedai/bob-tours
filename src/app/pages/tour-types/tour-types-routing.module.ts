import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TourTypesPage } from './tour-types.page';

const routes: Routes = [
  {
    path: '',
    component: TourTypesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TourTypesPageRoutingModule {}
