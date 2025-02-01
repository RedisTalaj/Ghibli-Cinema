import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {


  // CRUD - Create(post), Read(get), Update(put, patch), Delete(delete)
  private url: string ='https://ghibliapi.vercel.app/films';

  
  constructor(private http: HttpClient) { }

  getMovies(){
    return this.http.get(this.url);
  }


  getMovieById(id: string){
    return this.http.get(this.url +'/'+id);
  }
}
