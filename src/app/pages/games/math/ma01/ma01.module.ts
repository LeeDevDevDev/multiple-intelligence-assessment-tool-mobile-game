import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ma01PageRoutingModule } from './ma01-routing.module';

import { Ma01Page } from './ma01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ma01PageRoutingModule
  ],
  declarations: [Ma01Page]
})
export class Ma01PageModule {}
