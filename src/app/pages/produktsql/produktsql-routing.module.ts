import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProduktsqlPage } from './produktsql.page';

const routes: Routes = [
  {
    path: '',
    component: ProduktsqlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProduktsqlPageRoutingModule {}
