import { HttpClient, HttpClientModule } from '@angular/common/http';

import { IMoviePage } from '../../interfaces/i-movie-page';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesApiService {
  private readonly apiKey = 'cbd86d6930b41ea996be83112f25a3c4';
  private readonly apiURL = 'https://api.themoviedb.org/3/discover/';
  private readonly apiURLImage = 'https://image.tmdb.org/t/p/';

  constructor(private http: HttpClient) {}

  getPopularMovies(
    page: number = 1,
    sortBy: string = 'popularity',
    sortType: string = 'desc'
  ): Observable<IMoviePage> {
    const url = `${this.apiURL}movie?api_key=${this.apiKey}&sort_by=${sortBy}.${sortType}&language=es&page=${page}`;

    return this.http.get<IMoviePage>(url);
  }
}
