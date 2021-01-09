import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GameLibraryPageRoutingModule } from './game-library-routing.module';

import { GameLibraryPage } from './game-library.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GameLibraryPageRoutingModule
  ],
  declarations: [GameLibraryPage]
})
export class GameLibraryPageModule {}
