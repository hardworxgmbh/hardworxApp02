import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnternehmenPage } from './unternehmen.page';

const routes: Routes = [
  {
    path: '',
    component: UnternehmenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnternehmenPageRoutingModule {}
