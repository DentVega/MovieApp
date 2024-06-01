import HomeService from '../services/HomeService.tsx';
import Home from '../pages/Home.tsx';

const HomeController = () => {
  const { movies } = HomeService.useHomeService();

  return <Home movies={movies} />;
};

export default HomeController;
