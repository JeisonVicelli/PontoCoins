import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrindeReadComponent } from './brinde-read.component';

describe('BrindeReadComponent', () => {
  let component: BrindeReadComponent;
  let fixture: ComponentFixture<BrindeReadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrindeReadComponent]
    });
    fixture = TestBed.createComponent(BrindeReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
