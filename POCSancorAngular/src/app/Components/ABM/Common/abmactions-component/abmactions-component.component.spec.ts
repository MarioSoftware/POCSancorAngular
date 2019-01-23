import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ABMActionsComponentComponent } from './abmactions-component.component';

describe('ABMActionsComponentComponent', () => {
  let component: ABMActionsComponentComponent;
  let fixture: ComponentFixture<ABMActionsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ABMActionsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ABMActionsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
