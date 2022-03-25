import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbumsService } from 'app/services/albums.service';
import { MockAlbumsService } from 'app/mocks/services';

import { AlbumItemComponent } from './album-item.component';

describe('AlbumItemComponent', () => {
  let component: AlbumItemComponent;
  let fixture: ComponentFixture<AlbumItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumItemComponent ],
      imports: [ HttpClientModule ],
      providers: [
        { provide: AlbumsService, useValue: MockAlbumsService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumItemComponent);
    component = fixture.componentInstance;

    // Set component attributes
    component.album = {
      id: 1,
      title: 'Album 1',
    };

    // Apply changes
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have isLoadingImages as true before load all images', () => {
    // given
    const imageCount = 2;

    // when
    for (let i = 0; i < imageCount; i++) {
      component.imageLoaded();
    }

    // then
    expect(component.isLoadingImages).toBeTrue();
  });

  it('should have isLoadingImages as false after load component', () => {
    // given
    const imageCount = 4;

    // when
    for (let i = 0; i < imageCount; i++) {
      component.imageLoaded();
    }

    // then
    expect(component.isLoadingImages).toBeFalse();
  });
});
