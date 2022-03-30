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
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ErrorHandlerComponent } from './components/error-handler/error-handler.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    CarouselComponent,
    FooterComponent,
    HomeComponent,
    AlbumsComponent,
    AlbumItemComponent,
    GalleryComponent,
    HeaderComponent,
    BreadcrumbComponent,
    ErrorHandlerComponent
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
