import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { FooterComponent } from '@/components/footer/footer.component';
import { HeaderComponent } from '@/components/header/header.component';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'sample-blog'`, () => {
    expect(component.title).toEqual('sample-blog');
  });

  it('should set page height after view init', () => {
    // given
    const headerHeight = component.appHeader._getHeight();
    const footerHeight = component.appFooter._getHeight();

    // when
    component.ngAfterViewInit();

    // then
    expect(component.appContainer.nativeElement.style.minHeight).toBe(`calc(100vh - ${headerHeight + footerHeight}px)`);
  });
});
