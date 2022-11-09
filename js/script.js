"use strict";

let numberOFFilms;
let statisticFilms = 2;
let numberGenres = 3;

function start () {
  numberOFFilms = +prompt("Cколько фильмов вы уже посмотрели?", "");

  while (numberOFFilms == '' || numberOFFilms == null || isNaN(numberOFFilms)) {
    numberOFFilms = +prompt("Cколько фильмов вы уже посмотрели?", "");
  }
}

start ();

const personalMovieDB = {
  count: numberOFFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function rememberMyFilms () {
  label: for (let i = 0; i < statisticFilms; i++ ) {
    let lastFilm = prompt("Один из последних посмотреных фильмов?", "");
    if (lastFilm === null || lastFilm === "" || lastFilm.length > 50 ) {
      i--;
      continue label;
    }
    let filmScore = +prompt("На сколько оцените его от 0 до 10 ?", "");
    if (filmScore === null || filmScore === "" || filmScore < 0 || filmScore > 10) {
      alert('Введите цыфру от 0 до 10!!!');
      i--;
      continue label;
    }
    personalMovieDB.movies[lastFilm] = filmScore;
  }
}

rememberMyFilms ();

function detectPersonalLvl () {
  if (personalMovieDB.count < 10) {
    alert('Посмотрено довольно мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
    alert('Вы класный зритель');
  } else if (personalMovieDB.count >= 30) {
    alert('Вы киноман');
  } else {
    alert('Произошла ошибка');
  }
}

detectPersonalLvl ();

function showMyDb(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDb(personalMovieDB.privat);

function writeYourGenres (numb) {
  for (let i = 1; i <= numb; i++) {
    personalMovieDB.genres.push(prompt(`Ваш любимый жанр №${i}?`, ""));
  }
}

writeYourGenres(numberGenres);