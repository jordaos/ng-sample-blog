import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from 'app/pages/about-page/about-page.component';
import { GalleryComponent } from 'app/pages/gallery/gallery.component';
import { AlbumsComponent } from 'app/pages/albums/albums.component';
import { HomeComponent } from 'app/pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: 'albums/:id', component: GalleryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
