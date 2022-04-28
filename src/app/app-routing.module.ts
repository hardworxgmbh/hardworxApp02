import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'unternehmen',
    loadChildren: () => import('./pages/unternehmen/unternehmen.module').then( m => m.UnternehmenPageModule)
  },
  {
    path: 'mitarbeiter',
    loadChildren: () => import('./pages/mitarbeiter/mitarbeiter.module').then( m => m.MitarbeiterPageModule)
  },
  {
    path: 'kontakt',
    loadChildren: () => import('./pages/kontakt/kontakt.module').then( m => m.KontaktPageModule)
  },
  {
    path: 'produkte',
    loadChildren: () => import('./pages/produkte/produkte.module').then( m => m.ProduktePageModule)
  },
  {
    path: 'produktsql',
    loadChildren: () => import('./pages/produktsql/produktsql.module').then( m => m.ProduktsqlPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
