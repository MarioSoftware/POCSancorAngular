import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ABMUserComponentComponent } from './abmuser-component.component';

describe('ABMUserComponentComponent', () => {
  let component: ABMUserComponentComponent;
  let fixture: ComponentFixture<ABMUserComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ABMUserComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ABMUserComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
