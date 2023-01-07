/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

if (personalMovieDB.count <= 10) {
  console.log('просмотрено довольно мало фильмов <10');
} else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
  console.log('вы классический зритель от 10 до 30');
} else if (personalMovieDB.count > 30) {
  console.log('вы тру киноман >30');
} else {
  console.log('произошла ошибка');
}

let i = 0; //это вместо for

while (i < 2) {  //это вместо for
  console.log(i);
  const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');
  if (a != '' && b != '' && a != null && b != null && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log('done');
  } else {
    i--;
    console.log('error');
  }
  i++;  //это вместо for
}
      
console.log(personalMovieDB);