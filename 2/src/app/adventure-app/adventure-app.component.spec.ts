import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventureAppComponent } from './adventure-app.component';

describe('AdventureAppComponent', () => {
  let component: AdventureAppComponent;
  let fixture: ComponentFixture<AdventureAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdventureAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdventureAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
