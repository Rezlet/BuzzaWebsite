import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBookingDetailsComponent } from './table-booking-details.component';

describe('TableBookingDetailsComponent', () => {
  let component: TableBookingDetailsComponent;
  let fixture: ComponentFixture<TableBookingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableBookingDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableBookingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
