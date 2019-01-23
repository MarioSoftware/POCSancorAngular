import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridUserComponentComponent } from './grid-user-component.component';

describe('GridUserComponentComponent', () => {
  let component: GridUserComponentComponent;
  let fixture: ComponentFixture<GridUserComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridUserComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridUserComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
