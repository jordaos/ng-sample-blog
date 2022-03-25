import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct site title', () => {
    const element = fixture.nativeElement as HTMLElement;
    const appTitle = element.querySelector('span[data-test-id="app-title"]')?.textContent;
    expect(appTitle).toBe("Sample Blog");
  });

  it('should return correct height', () => {
    const elementHeight = component.appHeader.nativeElement.clientHeight;
    expect(component._getHeight()).toBe(elementHeight);
  });
});
