import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnsVisibilityPanelComponent } from './columns-visibility-panel.component';

describe('ColumnsVisibilityPanelComponent', () => {
  let component: ColumnsVisibilityPanelComponent;
  let fixture: ComponentFixture<ColumnsVisibilityPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnsVisibilityPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnsVisibilityPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
