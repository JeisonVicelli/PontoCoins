import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrindeDeleteComponent } from './brinde-delete.component';

describe('BrindeDeleteComponent', () => {
  let component: BrindeDeleteComponent;
  let fixture: ComponentFixture<BrindeDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrindeDeleteComponent]
    });
    fixture = TestBed.createComponent(BrindeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
