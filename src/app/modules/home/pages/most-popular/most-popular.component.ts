import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { IMovie } from '../../../../core/interfaces/i-movie';
import { IMoviePage } from '../../../../core/interfaces/i-movie-page';
import { LoaderComponent } from '../../../../components/loader/loader.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MovieCardComponent } from '../../../../components/movie-card/movie-card.component';
import { MoviesApiService } from '../../../../core/services/MoviesApi/movies-api.service';
import { PaginatorComponent } from '../../../../components/paginator/paginator.component';

@Component({
  selector: 'app-most-popular',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    LoaderComponent,
    PaginatorComponent,
    MovieCardComponent,
  ],
  templateUrl: './most-popular.component.html',
  styleUrl: './most-popular.component.scss',
})
export class MostPopularComponent implements OnInit {
  popularMovies: IMoviePage = {
    page: 0,
    results:
      [
        {
          id: 0,
          title: '',
          overview: '',
          popularity: 0,
          poster_path: '',
          vote_count: 0,
          vote_average: 0,
          release_date: '',
          backdrop_path: '',
          genre_ids: [0],
          original_language: '',
          original_title: '',
          video: false,
        }
      ],
    total_pages: 0,
    total_results: 0,
  };

  constructor(private moviesApiService: MoviesApiService) {}

  ngOnInit(): void {
    // Llama al método getPopularMovies y suscríbete para obtener los resultados
    this.moviesApiService.getPopularMovies().subscribe(
      (movies) => {
        // Imprime los resultados en la consola
        this.popularMovies = movies;

        console.log(movies);
      },
      (error) => {
        console.error('Error al obtener películas:', error);
      }
    );
  }

  getImage(poster_path: string) {}
}
