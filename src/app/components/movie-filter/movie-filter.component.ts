import { Component, EventEmitter, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MoviesApiService } from '../../core/services/MoviesApi/movies-api.service';

@Component({
  selector: 'app-movie-filter',
  standalone: true,
  imports: [
    MatExpansionModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule
  ],
  templateUrl: './movie-filter.component.html',
  styleUrl: './movie-filter.component.scss',
})
export class MovieFilterComponent implements OnInit {
  @Output() filterChange = new EventEmitter<iFilter>();

  ngOnInit(): void {
    this.form.valueChanges.subscribe(() => {
      this.emitFilterChange();
    })
  }

  filter: iFilter = {
    sortBy: '',
    sortType: '',
  }
  form: FormGroup = this.fb.group({
    sortBy: ['popularity'],
    sortType: ['desc'],
  })

  constructor(private fb: FormBuilder, private moviesApiService: MoviesApiService){}

  emitFilterChange(): void {
    this.filter = this.form.value;
    this.filterChange.emit(this.filter);
  }
}

export interface iFilter {
  sortBy: string;
  sortType: string;
}