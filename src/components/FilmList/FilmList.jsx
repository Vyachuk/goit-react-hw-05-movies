import { HomeItem } from 'pages/Home.styled';
import React from 'react';
import { Link } from 'react-router-dom';

const FilmList = ({ id, title }) => {
  return (
    <HomeItem>
      <Link to={`/movies/${id.toString()}`}>{title}</Link>
    </HomeItem>
  );
};

export default FilmList;
