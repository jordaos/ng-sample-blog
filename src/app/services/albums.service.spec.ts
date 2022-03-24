import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { AlbumsService } from './albums.service';
import { environment } from 'environments/environment';

import { Album } from 'app/interfaces/Album';
import { Photo } from 'app/interfaces/Photo';

const albumsMock: Album[] = [
  {
    id: 1,
    title: 'quidem molestiae enim'
  },
  {
    id: 2,
    title: 'sunt qui excepturi placeat culpa'
  },
  {
    id: 3,
    title: 'omnis laborum odio'
  }
];

const photosMock: Photo[] = [
  {
    albumId: 1,
    id: 1,
    title: 'accusamus beatae ad facilis cum similique qui sunt',
    url: 'https://via.placeholder.com/600/92c952',
    thumbnailUrl: 'https://via.placeholder.com/150/92c952'
  },
  {
    albumId: 1,
    id: 2,
    title: 'reprehenderit est deserunt velit ipsam',
    url: 'https://via.placeholder.com/600/771796',
    thumbnailUrl: 'https://via.placeholder.com/150/771796'
  },
  {
    albumId: 1,
    id: 3,
    title: 'officia porro iure quia iusto qui ipsa ut modi',
    url: 'https://via.placeholder.com/600/24f355',
    thumbnailUrl: 'https://via.placeholder.com/150/24f355'
  }
];

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
