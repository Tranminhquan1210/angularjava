import { Injectable } from '@angular/core';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getMovies() {
    const movies: Movie[] = [
          // tslint:disable-next-line:max-line-length
          { title: 'Zootopia', director: 'Byron Howard, Rich Moore', cast: 'Idris Elba, Ginnifer Goodwin, Jason Bateman', releaseDate: 'March 4, 2016' },
          // tslint:disable-next-line:max-line-length
          { title: 'Batman v Superman: Dawn of Justice', director: 'Zack Snyder', cast: 'Ben Affleck, Henry Cavill, Amy Adams', releaseDate: 'March 25, 2016' },
          // tslint:disable-next-line:max-line-length
          { title: 'Captain America: Civil War', director: 'Anthony Russo, Joe Russo', cast: 'Scarlett Johansson, Elizabeth Olsen, Chris Evans', releaseDate: 'May 6, 2016' },
          // tslint:disable-next-line:max-line-length
          { title: 'X-Men: Apocalypse', director: 'Bryan Singer', cast: 'Jennifer Lawrence, Olivia Munn, Oscar Isaac', releaseDate: 'May 27, 2016' },
        ];
    return movies;
  }
}
