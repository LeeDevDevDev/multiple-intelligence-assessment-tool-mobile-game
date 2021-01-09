import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
      {
        path: '',
        redirectTo: 'game-library',
        pathMatch: 'full'
      },
      {
        path: 'game-library',
        loadChildren: () =>
          import('./game-library/game-library.module').then(
            m => m.GameLibraryPageModule
          )
      },

      {
        path: 'account',
        loadChildren: () =>
          import('./account/account.module').then(m => m.AccountPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule {}
