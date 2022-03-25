import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { photosMock } from 'app/mocks/objects';
import { MockAlbumsService } from 'app/mocks/services';
import { AlbumsService } from 'app/services/albums.service';

import { GalleryComponent } from './gallery.component';

describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryComponent ],
      imports: [ HttpClientModule, RouterTestingModule ],
      providers: [
        { provide: AlbumsService, useValue: MockAlbumsService }
      ]
    })
    .compileComponents();

    MockAlbumsService._reset();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set photos after init the component', () => {
    expect(component.photos).toBe(photosMock);
  })
});
