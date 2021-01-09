import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Game, GameEntry, GamePerformance } from '../../../models/game.model';
import { AuthService } from '../../../services/auth.service';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-game-modal',
  templateUrl: './game-modal.page.html',
  styleUrls: ['./game-modal.page.scss']
})
export class GameModalPage implements OnInit {
  @Input() game: Game;
  gamePerf$: Observable<GamePerformance>;
  gameEntries$: Observable<GameEntry[]>;

  constructor(
    private modalController: ModalController,
    private authService: AuthService,
    private afFire: AngularFirestore
  ) {}

  ngOnInit() {
    this.gameEntries$ = this.authService.user$.pipe(
      switchMap(user => {
        return this.afFire
          .collection('users')
          .doc(user.uid)
          .collection('games')
          .doc(this.game.id)
          .collection<GameEntry>('history', ref => ref.orderBy('date').limit(3))
          .valueChanges();
      })
    );
    this.gamePerf$ = this.authService.user$.pipe(
      switchMap(user => {
        return this.afFire
          .collection('users')
          .doc(user.uid)
          .collection('games')
          .doc<GamePerformance>(this.game.id)
          .valueChanges();
      })
    );
  }

  async onClose() {
    await this.modalController.dismiss();
  }
}
