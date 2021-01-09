import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GameLibraryPage } from './game-library.page';

describe('GameLibraryPage', () => {
  let component: GameLibraryPage;
  let fixture: ComponentFixture<GameLibraryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameLibraryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GameLibraryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
