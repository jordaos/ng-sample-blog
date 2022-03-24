import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.scss']
})
export class AlbumItemComponent {

  @ViewChild('imagesContent') imagesContent: ElementRef;
  isLoadingImages: Boolean = true;
  loadedImagesCount = 0;

  imageLoaded() {
    this.loadedImagesCount += 1;

    if (this.loadedImagesCount >= 3) {
      this.isLoadingImages = false;
    }
  }
}
