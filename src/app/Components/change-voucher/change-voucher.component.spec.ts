import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeVoucherComponent } from './change-voucher.component';

describe('ChangeVoucherComponent', () => {
  let component: ChangeVoucherComponent;
  let fixture: ComponentFixture<ChangeVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeVoucherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
