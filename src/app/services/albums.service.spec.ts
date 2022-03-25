import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { AlbumsService } from './albums.service';
import { environment } from 'environments/environment';

import { albumsMock, photosMock } from 'app/mocks/objects';

describe('AlbumsService', () => {
  let service: AlbumsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(AlbumsService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return correctly list when call getAll', done => {
    // when
    service.getAll().subscribe(response => {
      expect(response).toBe(albumsMock);
      done();
    });

    const testRequest = httpTestingController.expectOne(
      `${environment.apiUrl}/${service.endpoint}`
    );
    testRequest.flush(albumsMock);
  });

  it('should return correctly list of photos when call getPhotosByAlbum', done => {
    // given
    const albumId = 1;

    // when
    service.getPhotosByAlbum(albumId).subscribe(response => {
      expect(response).toBe(photosMock);
      done();
    });

    const testRequest = httpTestingController.expectOne(
      `${environment.apiUrl}/${service.endpoint}/${albumId}/photos`
    );
    testRequest.flush(photosMock);
  });
});
