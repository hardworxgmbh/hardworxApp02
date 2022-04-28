import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProduktsqlPageRoutingModule } from './produktsql-routing.module';

import { ProduktsqlPage } from './produktsql.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProduktsqlPageRoutingModule
  ],
  declarations: [ProduktsqlPage]
})
export class ProduktsqlPageModule {}
