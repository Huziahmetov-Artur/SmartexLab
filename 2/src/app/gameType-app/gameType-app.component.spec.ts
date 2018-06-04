import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameTypeAppComponent } from './gameType-app.component';

describe('GameTypeAppComponent', () => {
  let component: GameTypeAppComponent;
  let fixture: ComponentFixture<GameTypeAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameTypeAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameTypeAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
