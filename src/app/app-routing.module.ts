import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {
  AngularFireAuthGuard,
  canActivate,
  redirectLoggedInTo
} from '@angular/fire/auth-guard';

const redirectLoggedInToMain = () => redirectLoggedInTo(['main']);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then(m => m.LoginPageModule),
    ...canActivate(redirectLoggedInToMain)
  },
  {
    path: 'main',
    loadChildren: () =>
      import('./pages/main/main.module').then(m => m.MainPageModule)
  },
  {
    path: 'game-modal',
    loadChildren: () =>
      import('./pages/common/game-modal/game-modal.module').then(
        m => m.GameModalPageModule
      )
  },
  {
    path: 'ma01',
    loadChildren: () =>
      import('./pages/games/math/ma01/ma01.module').then(m => m.Ma01PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
