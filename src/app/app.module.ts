import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { AlbumItemComponent } from './components/album-item/album-item.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpCacheInterceptorModule, useHttpCacheLocalStorage } from '@ngneat/cashew';

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    CarouselComponent,
    FooterComponent,
    HomeComponent,
    AlbumsComponent,
    AlbumItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpCacheInterceptorModule.forRoot({
      ttl: 600000, // 10 min
    })
  ],
  providers: [useHttpCacheLocalStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
