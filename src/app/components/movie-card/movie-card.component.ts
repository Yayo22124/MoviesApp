import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';
import { IMovie } from '../../core/interfaces/i-movie';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
})
export class MovieCardComponent {
  @Input({ required: true, alias: 'movie_properties' })
  movieProperties: IMovie = {
    title: '',
    overview: '',
    popularity: 0,
    poster_path: '',
    vote_count: 0,
    vote_average: 0,
    release_date: '',
  };
  constructor(private router: Router) {
  }
}
