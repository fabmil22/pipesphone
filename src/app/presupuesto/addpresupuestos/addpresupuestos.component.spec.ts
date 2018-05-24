import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpresupuestosComponent } from './addpresupuestos.component';

describe('AddpresupuestosComponent', () => {
  let component: AddpresupuestosComponent;
  let fixture: ComponentFixture<AddpresupuestosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpresupuestosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpresupuestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
