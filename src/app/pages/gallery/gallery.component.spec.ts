import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { throwError } from 'rxjs';

import { photosMock } from 'app/mocks/objects';
import { mockAlbumsServiceDefaults, MockAlbumsService } from 'app/mocks/services';
import { AlbumsService } from 'app/services/albums.service';

import { GalleryComponent } from './gallery.component';

describe('GalleryComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryComponent ],
      imports: [ HttpClientModule, RouterTestingModule ],
      providers: [
        { provide: AlbumsService, useValue: MockAlbumsService }
      ]
    })
    .compileComponents();
  });

  afterEach(() => {
    MockAlbumsService.getAll.and.returnValue(mockAlbumsServiceDefaults.getAll);
    MockAlbumsService.getPhotosByAlbum.and.returnValue(mockAlbumsServiceDefaults.getPhotosByAlbum);
    MockAlbumsService._reset();
  })

  const mountComponent = (() => {
    const fixture: ComponentFixture<GalleryComponent> = TestBed.createComponent(GalleryComponent);
    const component: GalleryComponent = fixture.componentInstance;
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

  it('should set photos after init the component', () => {
    // when
    const { component } = mountComponent();

    // then
    expect(component.photos).toBe(photosMock);
  });

  it('shoud handle error correctly on status 404', () => {
    // given
    const status = 404;
    MockAlbumsService.getPhotosByAlbum.and.returnValue(throwError(() => new HttpErrorResponse({
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
    MockAlbumsService.getPhotosByAlbum.and.returnValue(throwError(() => new HttpErrorResponse({
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
