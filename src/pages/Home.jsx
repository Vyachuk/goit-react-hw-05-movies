import FilmList from 'components/FilmList/FilmList';
import { useEffect, useState } from 'react';
import { fetchTopFilms } from 'service/fetchApi';
import { HomeList } from './Home.styled';

const Home = () => {
  const [topFilms, setTopFilms] = useState([]);
  useEffect(() => {
    fetchTopFilms().then(data => {
      return setTopFilms(data);
    });
  }, []);
  return (
    <HomeList>
      {topFilms.map(({ id, title }) => (
        <FilmList id={id} title={title} key={id} />
      ))}
    </HomeList>
  );
};

export default Home;
