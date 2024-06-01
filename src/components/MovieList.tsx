import { Movie } from '../models/Movie.ts';

type Props = {
  movies: Movie[];
};

const MovieList = ({ movies }: Props) => {
  return (
    <div>
      <h1>Movie List</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default MovieList;
