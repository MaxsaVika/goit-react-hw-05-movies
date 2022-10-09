import axios from 'axios';

const API_KEY = '5b00cd10e05c354cfbdbc23aa24fc7b8';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const searchTrendDayMovie = async () => {
  const response = await axios.get(`trending/all/day?api_key=${API_KEY}`);
  return await response.data;
};

export const searchMovieById = async id => {
  const response = await axios.get(
    `movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return await response.data;
};

export const searchMovieCast = async id => {
  const response = await axios.get(
    `movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return await response.data;
};

export const searchMovieReviews = async id => {
  const response = await axios.get(
    `movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return await response.data;
};

export const searchMovies = async query => {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  );
  return await response.data;
};
