import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnsVisibilityToggleComponent } from './columns-visibility-toggle.component';

describe('ColumnsVisibilityToggleComponent', () => {
  let component: ColumnsVisibilityToggleComponent;
  let fixture: ComponentFixture<ColumnsVisibilityToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnsVisibilityToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnsVisibilityToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
