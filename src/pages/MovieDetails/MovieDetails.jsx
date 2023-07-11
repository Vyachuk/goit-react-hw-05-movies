import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchFilmById } from 'service/fetchApi';
import {
  AdditionalInfo,
  ButtonBack,
  FilmBanner,
  FilmInfoWrapper,
  GenresItem,
  GenresList,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [filmData, setFilmData] = useState({});
  useEffect(() => {
    fetchFilmById(movieId).then(data => {
      const { title, poster_path, vote_average, overview, genres } = data;
      setFilmData({
        photo: `https://image.tmdb.org/t/p/original/${poster_path}`,
        title,
        votes: vote_average * 10,
        overview,
        genres,
      });
    });
  }, [movieId]);

  const { photo, title, votes, overview, genres } = filmData;
  return (
    <>
      <ButtonBack to={location.state?.from || '/'}>&#8656; Go back</ButtonBack>
      <FilmInfoWrapper>
        <FilmBanner src={photo} alt={title} />
        <div>
          <h2>{title}</h2>
          <p>User score: {votes?.toFixed(2)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <GenresList>
            {genres?.map(item => (
              <GenresItem key={item.id}>{item.name}</GenresItem>
            ))}
          </GenresList>
        </div>
      </FilmInfoWrapper>
      <hr />
      <AdditionalInfo>Additional information</AdditionalInfo>
      <GenresList>
        <GenresItem>
          <Link state={location.state} to="cast">
            Cast
          </Link>
        </GenresItem>
        <GenresItem>
          <Link state={location.state} to="reviews">
            Reviews
          </Link>
        </GenresItem>
      </GenresList>
      <hr />
      <Outlet />
    </>
  );
};

export default MovieDetails;
