"use strict";


let statisticFilms = 2;
let numberGenres = 3;

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: () => {
    personalMovieDB.count = +prompt("Cколько фильмов вы уже посмотрели?", "");

      while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) { 
        personalMovieDB.count = +prompt("Cколько фильмов вы уже посмотрели?", "");
      }
    },
  rememberMyFilms: () => {
      label: for (let i = 0; i < statisticFilms; i++) {
        let lastFilm = prompt("Один из последних посмотреных фильмов?", "");
        if (lastFilm === null || lastFilm === "" || lastFilm.length > 50) {
          i--;
          continue label;
        }
        let filmScore = +prompt("На сколько оцените его от 0 до 10 ?", "");

        if (
          filmScore === null ||
          filmScore === "" ||
          filmScore < 0 ||
          filmScore > 10
        ) {
          alert("Введите цыфру от 0 до 10!!!");
          i--;
          continue label;
        }
        personalMovieDB.movies[lastFilm] = filmScore;
      }
    },
  detectPersonalLvl: () => {
      if (personalMovieDB.count < 10) {
        alert("Посмотрено довольно мало фильмов");
      } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert("Вы класный зритель");
      } else if (personalMovieDB.count >= 30) {
        alert("Вы киноман");
      } else {
        alert("Произошла ошибка");
      }
    },
  showMyDb: hidden => {
      if (!hidden) {
        console.log(personalMovieDB);
      }
    },
  writeYourGenres: numb => {
      for (let i = 1; i <= numb; i++) {
        let genre = prompt(`Ваш любимый жанр №${i}?`, "");
        if (genre === null || genre === "") {
          console.log('Вы ввели некорректные данные!');
          i--;
        } else {
          personalMovieDB.genres.push(genre);
        }
      }
    },
  toggleVisibleMyDB: () => {
      if (personalMovieDB.privat) {
        personalMovieDB.privat = false;
      } else {
        personalMovieDB.privat = true;
      }
      personalMovieDB.genres.forEach((item, i) => {
        console.log(`Любимый жанр №${i + 1} - это ${item}`);
      });
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLvl();
personalMovieDB.showMyDb(personalMovieDB.privat);
personalMovieDB.writeYourGenres(numberGenres);
