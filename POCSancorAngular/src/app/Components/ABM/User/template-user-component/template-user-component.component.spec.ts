import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateUserComponentComponent } from './template-user-component.component';

describe('TemplateUserComponentComponent', () => {
  let component: TemplateUserComponentComponent;
  let fixture: ComponentFixture<TemplateUserComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateUserComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateUserComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
