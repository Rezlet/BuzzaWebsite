import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherItemDisableComponent } from './voucher-item-disable.component';

describe('VoucherItemDisableComponent', () => {
  let component: VoucherItemDisableComponent;
  let fixture: ComponentFixture<VoucherItemDisableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoucherItemDisableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoucherItemDisableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
