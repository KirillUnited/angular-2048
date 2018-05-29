import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnToggleComponent } from './btn-toggle.component';

describe('BtnToggleComponent', () => {
  let component: BtnToggleComponent;
  let fixture: ComponentFixture<BtnToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
