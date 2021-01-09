import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ma01Page } from './ma01.page';

const routes: Routes = [
  {
    path: '',
    component: Ma01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ma01PageRoutingModule {}
