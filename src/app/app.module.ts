import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieComponent } from './components/movie/movie.component';
import { MenuComponent } from './components/menu/menu.component';
import { NgMovieDetailComponent } from './components/ng-movie-detail/ng-movie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MenuComponent,
    NgMovieDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
