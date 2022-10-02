import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TourTypesPageRoutingModule } from './tour-types-routing.module';

import { TourTypesPage } from './tour-types.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TourTypesPageRoutingModule
  ],
  declarations: [TourTypesPage]
})
export class TourTypesPageModule {}
