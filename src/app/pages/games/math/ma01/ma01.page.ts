import { Component, OnInit } from '@angular/core';

export interface GameInstance {
  operation?: string;
  firstNumber?: number;
  secondNumber?: number;
  thirdNumber?: number;
  firstChoice?: number;
  secondChoice?: number;
  thirdChoice?: number;
}

@Component({
  selector: 'app-ma01',
  templateUrl: './ma01.page.html',
  styleUrls: ['./ma01.page.scss']
})
export class Ma01Page implements OnInit {
  score: number;

  constructor() {}

  ngOnInit() {}

  generateGameInstance() {}
}
