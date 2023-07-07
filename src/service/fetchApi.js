import axios from 'axios';

const API_KEY = '9dad8d3e784dca10550becb720f79d95';

export const fetchTopFilms = async () => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
    );
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchFilmById = async id => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchFilmCast = async id => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchFilmReview = async id => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const fetchFilmByWord = async word => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${word}&include_adult=false&page=1&api_key=${API_KEY}`
    );
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

//'https://api.themoviedb.org/3/search/movie?query=indiano&include_adult=false&language=en-US&page=1'
