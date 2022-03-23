import { Injectable } from '@angular/core';
import { Album } from 'app/interfaces/Album';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private endpoint = 'albums';
  getAll(): Promise<Array<Album>> {
    return fetch(`${environment.apiUrl}/${this.endpoint}`)
      .then(response => response.json());
  }
}
