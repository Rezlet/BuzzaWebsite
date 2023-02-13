import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroContactComponent } from './intro-contact.component';

describe('IntroContactComponent', () => {
  let component: IntroContactComponent;
  let fixture: ComponentFixture<IntroContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
