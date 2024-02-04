export interface IMovie {
  id?: number;
  title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_count: number;
  vote_average: number;
  release_date: string;
  adult?: false;
  backdrop_path?: string;
  genre_ids?: number[];
  original_language?: string;
  original_title?: string;
  video?: boolean;
}
