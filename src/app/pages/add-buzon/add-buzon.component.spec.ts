import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBuzonComponent } from './add-buzon.component';

describe('AddBuzonComponent', () => {
  let component: AddBuzonComponent;
  let fixture: ComponentFixture<AddBuzonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBuzonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBuzonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
