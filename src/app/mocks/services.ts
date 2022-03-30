import { of } from 'rxjs';
import { albumsMock, photosMock } from './objects';

// AlbumsService
export const mockAlbumsServiceDefaults = {
  getAll: of(albumsMock),
  getPhotosByAlbum: of(photosMock),
};

export const MockAlbumsService = jasmine.createSpyObj('AlbumsService', mockAlbumsServiceDefaults);

MockAlbumsService._reset = () => {
  MockAlbumsService.getAll.calls.reset();
  MockAlbumsService.getPhotosByAlbum.calls.reset();
}

// UtilsService
export const mockUtilsServiceDefaults = {
  isDevMode: false,
};

export const MockUtilsService = jasmine.createSpyObj('UtilsService', mockUtilsServiceDefaults);

MockUtilsService._reset = () => {
  MockUtilsService.isDevMode.calls.reset();
}
