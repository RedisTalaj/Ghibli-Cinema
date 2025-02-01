import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule, LoaderComponent],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent implements OnInit{

  movie: any | null;

  constructor(
    private movieService: MovieService, 
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getMovieById(id!);
  }

  getMovieById(id: string){
    this.movieService.getMovieById(id).subscribe((movie: any) => this.movie = movie);
  }
}
