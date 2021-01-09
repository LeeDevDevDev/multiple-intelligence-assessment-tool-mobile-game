import { State } from '@ngxs/store';
import { Injectable } from '@angular/core';

export interface Ma01Model {
  status: 'stopped' | 'playing' | 'finished';
  round: number;
}

@State<Ma01Model>({
  name: 'ma01',
  defaults: {
    status: 'stopped',
    round: 0
  }
})
@Injectable()
export class Ma01State {}
