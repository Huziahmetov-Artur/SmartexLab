import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartexTaskComponent } from './smartex-task.component';

describe('SmartexTaskComponent', () => {
  let component: SmartexTaskComponent;
  let fixture: ComponentFixture<SmartexTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartexTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartexTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
