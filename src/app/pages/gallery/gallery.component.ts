import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from 'app/interfaces/Photo';
import { AlbumsService } from 'app/services/albums.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, OnDestroy {

  private routerSubscriber: any;
  id: number;
  photos: Photo[];

  constructor(
    private route: ActivatedRoute,
    private readonly albumsService: AlbumsService,
  ) { }

  ngOnInit(): void {
    this.routerSubscriber = this.route.params.subscribe(params => {
      this.id = +params['id'];

      this.albumsService.getPhotosByAlbum(this.id)
        .subscribe(photos => {
          this.photos = photos;
        });
   });
  }

  ngOnDestroy() {
    this.routerSubscriber.unsubscribe();
  }

}
