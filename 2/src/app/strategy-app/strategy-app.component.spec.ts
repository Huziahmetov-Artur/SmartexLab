import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategyAppComponent } from './strategy-app.component';

describe('StrategyAppComponent', () => {
  let component: StrategyAppComponent;
  let fixture: ComponentFixture<StrategyAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrategyAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategyAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
