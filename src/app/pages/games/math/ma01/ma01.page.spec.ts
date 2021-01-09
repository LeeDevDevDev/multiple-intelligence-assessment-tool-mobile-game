import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Ma01Page } from './ma01.page';

describe('Ma01Page', () => {
  let component: Ma01Page;
  let fixture: ComponentFixture<Ma01Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ma01Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Ma01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
