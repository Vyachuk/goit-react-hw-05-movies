import Cast from 'components/Cast/Cast';
import { Header } from 'components/header/Header';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import Reviews from 'components/Reviews/Reviews';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import { Navigate, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

const ContentWrapper = styled.main`
  padding: 0px 20px;
`;

export const App = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <ContentWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </ContentWrapper>
    </div>
  );
};
