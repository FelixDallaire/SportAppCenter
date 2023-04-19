import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideGalleryComponent } from './guide-gallery.component';

describe('GuideGalleryComponent', () => {
  let component: GuideGalleryComponent;
  let fixture: ComponentFixture<GuideGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuideGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuideGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
