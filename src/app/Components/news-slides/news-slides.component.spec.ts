import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSlidesComponent } from './news-slides.component';

describe('NewsSlidesComponent', () => {
  let component: NewsSlidesComponent;
  let fixture: ComponentFixture<NewsSlidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsSlidesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsSlidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
