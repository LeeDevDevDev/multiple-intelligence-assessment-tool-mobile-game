import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { Game } from '../../../models/game.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { filter, map, startWith, switchMap } from 'rxjs/operators';
import { ModalController } from '@ionic/angular';
import { GameModalPage } from '../../common/game-modal/game-modal.page';

@Component({
  selector: 'app-game-library',
  templateUrl: './game-library.page.html',
  styleUrls: ['./game-library.page.scss']
})
export class GameLibraryPage implements OnInit {
  category = '';
  category$: BehaviorSubject<string> = new BehaviorSubject('');
  games$: Observable<Game[]>;
  constructor(
    private afFire: AngularFirestore,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.games$ = this.category$.pipe(
      switchMap(cat => {
        return this.afFire
          .collection<Game>('games', ref => ref.orderBy('category'))
          .valueChanges()
          .pipe(
            map(games =>
              games.filter(game => {
                if (cat === '') {
                  return true;
                }
                return game.category.toLowerCase().includes(cat.toLowerCase());
              })
            )
          );
      })
    );
  }

  setCategory() {
    this.category$.next(this.category);
  }

  async openGameModal(game: Game) {
    const gameModal = await this.modalController.create({
      component: GameModalPage,
      cssClass: 'modal',
      componentProps: {
        game
      }
    });
    await gameModal.present();
  }
}
