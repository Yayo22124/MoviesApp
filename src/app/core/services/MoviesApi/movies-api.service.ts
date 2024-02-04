import { HttpClient, HttpClientModule } from "@angular/common/http";

import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {
  private readonly apiKey = 'cbd86d6930b41ea996be83112f25a3c4';
  private readonly apiURL = 'https://api.themoviedb.org/3/discover/'
  private readonly apiURLImage = 'https://image.tmdb.org/t/p/'

  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<any> {
    const url = `${this.apiURL}movie?api_key=${this.apiKey}&sort_by=popularity.desc&language=es&page=1`;

    // Realiza la solicitud HTTP y devuelve el observable
    return this.http.get(url);
  }

  getImage(poster_path: string, size: string = "w250"): string {
    return `${this.apiURLImage}${size}/${poster_path}`;
  }
}
