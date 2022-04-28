import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnternehmenPageRoutingModule } from './unternehmen-routing.module';

import { UnternehmenPage } from './unternehmen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnternehmenPageRoutingModule
  ],
  declarations: [UnternehmenPage]
})
export class UnternehmenPageModule {}
