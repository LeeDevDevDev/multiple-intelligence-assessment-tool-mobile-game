import * as firebase from 'firebase/app';
import FieldValue = firebase.firestore.FieldValue;
import Timestamp = firebase.firestore.Timestamp;

export interface Game {
  name: string;
  id?: string;
  description?: string;
  photoUrl?: string;
  category?: string;
  code?: string;
}

export interface GamePerformance {
  gamesPlayed?: number;
}

export interface GameEntry {
  id?: string;
  date?: FieldValue | Timestamp;
  score?: number;
}
