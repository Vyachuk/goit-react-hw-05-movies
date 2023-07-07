import FilmList from 'components/FilmList/FilmList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchFilmByWord } from 'service/fetchApi';
import { HomeList } from './Home.styled';

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [value, setValue] = useState('');
  const [param, setParam] = useSearchParams();

  useEffect(() => {
    const query = param.get('query');
    if (!query) return;
    fetchFilmByWord(query).then(data => setFilms(data));
  }, [param]);
  const handleSubmit = e => {
    e.preventDefault();
    setParam({ query: value });
  };
  return (
    <div>
      <form action="">
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Search
        </button>
      </form>
      <HomeList>
        {films.map(({ id, title }) => (
          <FilmList id={id} title={title} key={id} />
        ))}
      </HomeList>
    </div>
  );
};

export default Movies;
