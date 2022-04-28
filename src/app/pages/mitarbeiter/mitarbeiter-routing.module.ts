import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MitarbeiterPage } from './mitarbeiter.page';

const routes: Routes = [
  {
    path: '',
    component: MitarbeiterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MitarbeiterPageRoutingModule {}
