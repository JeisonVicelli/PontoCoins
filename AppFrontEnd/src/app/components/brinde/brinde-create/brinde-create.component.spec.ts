import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrindeCreateComponent } from './brinde-create.component';

describe('BrindeCreateComponent', () => {
  let component: BrindeCreateComponent;
  let fixture: ComponentFixture<BrindeCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrindeCreateComponent]
    });
    fixture = TestBed.createComponent(BrindeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
