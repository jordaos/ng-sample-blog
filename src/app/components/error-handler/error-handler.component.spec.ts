import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilsService } from 'app/services/utils.service';
import { MockUtilsService, mockUtilsServiceDefaults } from 'app/mocks/services';

import { ErrorHandlerComponent } from './error-handler.component';

describe('ErrorHandlerComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorHandlerComponent ],
      providers: [
        { provide: UtilsService, useValue: MockUtilsService }
      ]
    })
    .compileComponents();
  });

  afterEach(() => {
    MockUtilsService.isDevMode.and.returnValue(mockUtilsServiceDefaults.isDevMode);
    MockUtilsService._reset();
  });

  const mountComponent = (() => {
    const fixture: ComponentFixture<ErrorHandlerComponent> = TestBed.createComponent(ErrorHandlerComponent);
    const component: ErrorHandlerComponent = fixture.componentInstance;

    // Set component attributes
    component.errorObject = {
      message: 'Test error',
      error: new Error('Test error')
    };

    fixture.detectChanges();

    return {
      component,
      fixture,
    };
  });

  it('should create', () => {
    // when
    const { component } = mountComponent();

    // then
    expect(component).toBeTruthy();
  });

  it('should console error when is in dev mode', () => {
    // given
    MockUtilsService.isDevMode.and.returnValue(true);
    spyOn(console, 'error');

    // when
    mountComponent()

    // then
    expect(console.error).toHaveBeenCalled();
  });
});
