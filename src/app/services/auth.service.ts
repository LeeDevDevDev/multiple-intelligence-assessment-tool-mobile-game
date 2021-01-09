import { Injectable } from '@angular/core';
import { User } from '../models/auth.model';
import { Observable, of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { switchMap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import UserCredential = firebase.auth.UserCredential;
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private afFire: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return afFire
            .collection<User>('users')
            .doc(user.uid)
            .valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  public sign(email: string, password: string): Promise<UserCredential> {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  public async signOut(): Promise<boolean> {
    await this.afAuth.signOut();
    return this.router.navigate(['login']);
  }
}
