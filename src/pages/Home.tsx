import { Movie } from '../models/Movie.ts';

type Props = {
  movies: Movie[];
};

const Home = ({ movies }: Props) => {
  return (
    <div>
      <h1>Lista de peliculas</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
