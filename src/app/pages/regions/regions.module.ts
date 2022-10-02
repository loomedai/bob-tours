import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegionsPageRoutingModule } from './regions-routing.module';

import { RegionsPage } from './regions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegionsPageRoutingModule
  ],
  declarations: [RegionsPage]
})
export class RegionsPageModule {}
