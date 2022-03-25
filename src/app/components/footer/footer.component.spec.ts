import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return correct height', () => {
    const elementHeight = component.appFooter.nativeElement.clientHeight;
    expect(component._getHeight()).toBe(elementHeight);
  });

  it('should call scrollTo on goToTop', () => {
    // given
    spyOn(window, 'scrollTo');

    // when
    component.goToTop();

    // then
    expect(window.scrollTo).toHaveBeenCalled();
  });
});
