import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBuzonesComponent } from './list-buzones.component';

describe('ListBuzonesComponent', () => {
  let component: ListBuzonesComponent;
  let fixture: ComponentFixture<ListBuzonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBuzonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBuzonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
