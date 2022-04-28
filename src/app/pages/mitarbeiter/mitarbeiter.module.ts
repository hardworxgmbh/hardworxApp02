import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MitarbeiterPageRoutingModule } from './mitarbeiter-routing.module';

import { MitarbeiterPage } from './mitarbeiter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MitarbeiterPageRoutingModule
  ],
  declarations: [MitarbeiterPage]
})
export class MitarbeiterPageModule {}
