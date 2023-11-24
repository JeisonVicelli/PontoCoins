import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrindeUpdateComponent } from './brinde-update.component';

describe('BrindeUpdateComponent', () => {
  let component: BrindeUpdateComponent;
  let fixture: ComponentFixture<BrindeUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrindeUpdateComponent]
    });
    fixture = TestBed.createComponent(BrindeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
