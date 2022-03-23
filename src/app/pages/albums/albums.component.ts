import { AlbumsService } from './../../services/albums.service';
import { Component, OnInit } from '@angular/core';
import { Album } from 'app/interfaces/Album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  constructor(private albumsService: AlbumsService) { }

  lastAlbums: Array<Album>;

  ngOnInit(): void {
    this.albumsService.getAll()
      .then((response: Array<Album>) => {
        console.log(response);
        this.lastAlbums = response.slice(0, 10);
      })
  }

}
