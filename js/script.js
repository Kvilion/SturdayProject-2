"use strict";

const numberOFFilms = prompt("Cколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOFFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const lastFilmOne = prompt("Один из последних посмотреных фильмов?", "");
const filmScoreOne = prompt("На сколько оцените его?", "");

const lastFilmTwo = prompt("Один из последних посмотреных фильмов?", "");
const filmScoreTwo = prompt("На сколько оцените его?", "");

personalMovieDB.movies[lastFilmOne] = filmScoreOne;
personalMovieDB.movies[lastFilmTwo] = filmScoreTwo;

console.log(personalMovieDB);