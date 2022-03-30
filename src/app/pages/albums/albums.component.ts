import { ErrorObject } from 'app/interfaces/ErrorObject';
import { AlbumsService } from './../../services/albums.service';
import { Component, OnInit } from '@angular/core';
import { Album } from 'app/interfaces/Album';
import { catchError, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  constructor(private albumsService: AlbumsService) { }

  lastAlbums: Array<Album>;
  // Errors
  hasError: Boolean = false;
  errorObject: ErrorObject;

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
    this.albumsService.getAll()
      .pipe(catchError(this.handleError))
      .subscribe((response: Array<Album>) => {
        this.lastAlbums = response.slice(0, 10);
      })
  }

}
