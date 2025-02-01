import { Routes } from '@angular/router';
import { MovieGridComponent } from './movie-grid/movie-grid.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { AboutComponent } from './about/about.component';
import { ErrorPageComponent } from './error-page/error-page.component';

export const routes: Routes = [
    {path: '', redirectTo: '/movies', pathMatch: 'full'},
    {path: 'movies', component: MovieGridComponent},
    {path: 'movies/:id', component: MovieDetailComponent},
    {path: 'about', component: AboutComponent},
    {path: '**', component: ErrorPageComponent} //deklarohet i fundit
];
