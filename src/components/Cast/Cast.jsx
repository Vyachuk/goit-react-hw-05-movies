import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFilmCast } from 'service/fetchApi';
import { CastItem, CastList, CastPhoto } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    fetchFilmCast(movieId).then(data => setCast(data.cast));
  }, [movieId]);
  return (
    <CastList>
      {cast.map(({ id, character, name, profile_path }) => (
        <CastItem key={id}>
          <CastPhoto
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/original/${profile_path}`
                : 'https://banffventureforum.com/wp-content/uploads/2019/08/No-Image.png'
            }
            alt={name}
          />
          <p>{name}</p>
          <p>Character: {character}</p>
        </CastItem>
      ))}
    </CastList>
  );
};

export default Cast;
