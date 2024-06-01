import { useEffect, useState } from 'react';

import { Movie } from '../models/Movie.ts';

import MovieUtils from '../utils/movieUtils.ts';

const useHomeService = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    setMovies(MovieUtils.convertMovieMockDataToMovie());
  }, []);

  return { movies };
};

const HomeService = {
  useHomeService,
};

export default HomeService;
