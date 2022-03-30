import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { withCache } from '@ngneat/cashew';

import { Album } from 'app/interfaces/Album';
import { Photo } from 'app/interfaces/Photo';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  endpoint = 'albums';

  constructor(private http: HttpClient){}

  getAll(): Observable<Array<Album>> {
    return this.http.get<Array<Album>>(`${environment.apiUrl}/${this.endpoint}`, {
      context: withCache()
    });
  }

  getPhotosByAlbum(id: Number): Observable<Array<Photo>> {
    return this.http.get<Array<Photo>>(`${environment.apiUrl}/${this.endpoint}/${id}/photos`, {
      context: withCache()
    });
  }
}
