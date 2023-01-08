/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat.
Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза 
отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". 
Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';


let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};


function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
    if (a != '' && b != '' && a != null && b != null && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('done');
    } else {
      i--;
      console.log('error');
    }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count <= 10) {
    console.log('просмотрено довольно мало фильмов <10');
  } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
    console.log('вы классический зритель от 10 до 30');
  } else if (personalMovieDB.count > 30) {
    console.log('вы тру киноман >30');
  } else {
    console.log('произошла ошибка');
  }
}

detectPersonalLevel();

function showMyDB() {
  if (personalMovieDB.private === false) {
    console.log(personalMovieDB);
  }
}

showMyDB();