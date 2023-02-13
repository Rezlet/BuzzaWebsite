import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherNewsSlidesComponent } from './voucher-news-slides.component';

describe('VoucherNewsSlidesComponent', () => {
  let component: VoucherNewsSlidesComponent;
  let fixture: ComponentFixture<VoucherNewsSlidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoucherNewsSlidesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoucherNewsSlidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
