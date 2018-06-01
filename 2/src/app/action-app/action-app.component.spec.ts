import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionAppComponent } from './action-app.component';

describe('ActionAppComponent', () => {
  let component: ActionAppComponent;
  let fixture: ComponentFixture<ActionAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
