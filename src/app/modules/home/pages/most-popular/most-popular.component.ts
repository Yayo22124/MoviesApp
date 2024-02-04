import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MoviesApiService } from '../../../../core/services/MoviesApi/movies-api.service';

@Component({
  selector: 'app-most-popular',
  standalone: true,
  imports: [HttpClientModule, MatCardModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './most-popular.component.html',
  styleUrl: './most-popular.component.scss',
})
export class MostPopularComponent implements OnInit {
  popularMovies: any[] = [];


  constructor(private moviesApiService: MoviesApiService) {}

  ngOnInit(): void {
    // Llama al método getPopularMovies y suscríbete para obtener los resultados
    this.moviesApiService.getPopularMovies().subscribe(
      (movies) => {
        // Imprime los resultados en la consola
        this.popularMovies = movies.results;

        console.log(movies);
      },
      (error) => {
        console.error('Error al obtener películas:', error);
      }
    );
  }

  getImage(poster_path: string) {

  }
}
