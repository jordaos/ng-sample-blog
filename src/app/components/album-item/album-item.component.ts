import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Album } from 'app/interfaces/Album';
import { Photo } from 'app/interfaces/Photo';
import { AlbumsService } from 'app/services/albums.service';

@Component({
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.scss']
})
export class AlbumItemComponent implements OnInit {

  @Input() album: Album;

  photos: Photo[];
  @ViewChild('imagesContent') imagesContent: ElementRef;
  isLoadingImages: Boolean = true;
  loadedImagesCount = 0;

  constructor (private readonly albumsService: AlbumsService) {}

  ngOnInit(): void {
    this.albumsService.getPhotosByAlbum(this.album.id)
      .subscribe(photos => {
        this.photos = photos.slice(0, 4);
      });
  }

  imageLoaded() {
    this.loadedImagesCount += 1;

    if (this.photos.length > 0 && this.loadedImagesCount >= this.photos.length) {
      this.isLoadingImages = false;
    }
  }
}
