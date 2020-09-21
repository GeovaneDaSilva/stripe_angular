import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisPaquetesComponent } from './mis-paquetes.component';

describe('MisPaquetesComponent', () => {
  let component: MisPaquetesComponent;
  let fixture: ComponentFixture<MisPaquetesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisPaquetesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisPaquetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
