import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from 'app/services/albums.service';
import { Photo } from 'app/interfaces/Photo';
import { ErrorObject } from 'app/interfaces/ErrorObject';
import { BreadcrumbItem } from 'app/interfaces/BreadcrumbItem';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, OnDestroy {

  private routerSubscriber: any;
  id: number;
  photos: Photo[];
  breadcrumb: BreadcrumbItem[] = [
    {
      title: 'Albums',
      route: '/albums'
    },
    {
      title: 'Galeria'
    }
  ];
  // Errors
  hasError: Boolean = false;
  errorObject: ErrorObject;

  constructor(
    private route: ActivatedRoute,
    private readonly albumsService: AlbumsService,
  ) { }

  handleError = (error: HttpErrorResponse) => {
    this.hasError = true;
    let message = 'Algo errado aconteceu; por favor, tente novamente mais tarde.';
    if (error.status === 0) {
      message = 'Falha de conexão com o servidor.';
    } else {
      message = 'Falha ao carregar a resposta do servidor.';
    }
    this.errorObject = {
      message,
      code: error.status,
      error
    }
    return throwError(() => new Error(message));
  }

  ngOnInit(): void {
    this.routerSubscriber = this.route.params.subscribe(params => {
      this.id = +params['id'];

      this.albumsService.getPhotosByAlbum(this.id)
        .pipe(catchError(this.handleError))
        .subscribe(photos => {
          this.photos = photos;
        });
   });
  }

  ngOnDestroy() {
    this.routerSubscriber.unsubscribe();
  }

}
