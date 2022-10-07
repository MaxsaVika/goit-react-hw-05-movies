// import React from 'react';
import axios from 'axios';

const API_KEY = '5b00cd10e05c354cfbdbc23aa24fc7b8';
// const URL = 'https://api.themoviedb.org/3/';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

// const API_KEY = '29165629-e4560c22cdc5666e7412722cd';

// export const searchApi = async (search, page = 1) => {
//   const respons = await axios.get(
//     `?key=${API_KEY}&page=${page}&image_type=photo&orientation=horizontal&q=${search}&safesearch=true&per_page=12`
//   );
//   return await respons.data;
// };

export const searchTrendDayMovie = async () => {
  const respons = await axios.get(`trending/all/day?api_key=${API_KEY}`);
  return await respons.data;
};

// Запрос тренд за день
// fetchTrendDayMovie = async () => {
//     try {
//       const responce = await axios.get(
//         `${this.URL}trending/all/${this.trendDay}?api_key=${this.API_KEY}&page=${this.page}`
//       );
//       this.incrementPage();
//       return responce.data.results;
//     } catch (error) {
//       console.log(error);
//     }
//   };

// ================ Запрос по названию
// fetchSearchMovie = async (category, page) => {
//   try {
//     const responce = await axios.get(
//       `${this.URL}search/movie?api_key=${this.API_KEY}&query=${category}&language=en-US&page=1&include_adult=false&page=${page}`
//     );

//     return responce.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// =============== Запрос по Id (информация о фильме)
// fetchMovieForId = async () => {
//   try {
//     const response = await axios.get(
//       `${this.URL}movie/${this.movieId}?api_key=${this.API_KEY}&language=en-US`
//     );
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };
