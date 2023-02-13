import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherForYouComponent } from './voucher-for-you.component';

describe('VoucherForYouComponent', () => {
  let component: VoucherForYouComponent;
  let fixture: ComponentFixture<VoucherForYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoucherForYouComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoucherForYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
