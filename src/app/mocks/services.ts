import { of } from 'rxjs';
import { albumsMock, photosMock } from './objects';

// AlbumsService

export const MockAlbumsService = jasmine.createSpyObj('AlbumsService', {
  getAll: of(albumsMock),
  getPhotosByAlbum: of(photosMock),
});

MockAlbumsService._reset = () => {
  MockAlbumsService.getAll.calls.reset();
  MockAlbumsService.getPhotosByAlbum.calls.reset();
}
