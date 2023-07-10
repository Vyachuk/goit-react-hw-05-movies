import { HomeItem } from 'pages/Home.styled';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const FilmList = ({ id, title }) => {
  const location = useLocation();
  return (
    <HomeItem>
      <Link to={`/movies/${id.toString()}`} state={{ from: location }}>
        {title}
      </Link>
    </HomeItem>
  );
};

export default FilmList;
