import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { throwError } from 'rxjs';

import { AlbumsService } from 'app/services/albums.service';
import { MockAlbumsService, mockAlbumsServiceDefaults } from 'app/mocks/services';

import { AlbumsComponent } from './albums.component';

describe('AlbumsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumsComponent ],
      imports: [ HttpClientModule, RouterTestingModule ],
      providers: [
        { provide: AlbumsService, useValue: MockAlbumsService }
      ]
    })
    .compileComponents();
  });

  afterEach(() => {
    MockAlbumsService.getAll.and.returnValue(mockAlbumsServiceDefaults.getAll);
    MockAlbumsService._reset();
  });

  const mountComponent = (() => {
    const fixture: ComponentFixture<AlbumsComponent> = TestBed.createComponent(AlbumsComponent);
    const component: AlbumsComponent = fixture.componentInstance;
    fixture.detectChanges();

    return {
      fixture,
      component
    }
  });

  it('should create', () => {
    // when
    const { component } = mountComponent();

    // then
    expect(component).toBeTruthy();
  });

  it('should set 10 albums after component init', () => {
    // when
    const { component } = mountComponent();

    // then
    expect(component.lastAlbums.length).toBe(10);
  });

  it('shoud handle error correctly on status 404', () => {
    // given
    const status = 404;
    MockAlbumsService.getAll.and.returnValue(throwError(() => new HttpErrorResponse({
      status
    })));

    // when
    const { component } = mountComponent();

    // then
    expect(component.hasError).toBeTrue();
    expect(component.errorObject.code).toBe(status);
    expect(component.errorObject.message).toBe('Falha ao carregar a resposta do servidor.');
  });

  it('shoud handle error correctly on status 0', () => {
    // given
    const status = 0;
    MockAlbumsService.getAll.and.returnValue(throwError(() => new HttpErrorResponse({
      status
    })));

    // when
    const { component } = mountComponent();

    // then
    expect(component.hasError).toBeTrue();
    expect(component.errorObject.code).toBe(status);
    expect(component.errorObject.message).toBe('Falha de conexão com o servidor.')
  });
});
