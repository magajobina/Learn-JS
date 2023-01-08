/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';


// start();

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  start: function() {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
  
    while (personalMovieDB.count == null || personalMovieDB.count == '' || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },
  rememberMyFilms: function() {
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
  },
  detectPersonalLevel: function() {
    if (personalMovieDB.count <= 10) {
      console.log('просмотрено довольно мало фильмов <10');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
      console.log('вы классический зритель от 10 до 30');
    } else if (personalMovieDB.count > 30) {
      console.log('вы тру киноман >30');
    } else {
      console.log('произошла ошибка');
    }
  },
  writeYourGenres: function() {
    let genresss;
    for (let i = 0; i < 1; i++) {
      genresss = prompt(`Введите ваши любимые жанры через запятую`, '');
      if (genresss == null || genresss === '') {
        i--; 
      } else {
        personalMovieDB.genres = genresss.split(', ');  // пихает куски строки в массив. Когда какой кусок пихать определяет по разделителю указанному в скобках (', ')
        personalMovieDB.genres.sort(); // сортирует по алфавиту, но прежде всего хуярит только все загланые, потом уже lowercase.
      }
    }
    personalMovieDB.genres.forEach((element, index)  => {
      console.log(`Любимый жанр #${index+1} - это ${element}`);
    });
  
  },
  showMyDB: function(arg) {
    if (!arg) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function() {
    if (personalMovieDB.private === false) {
      personalMovieDB.private = true;
    } else {
      personalMovieDB.private = false;
    }
  }
};

// personalMovieDB.toggleVisibleMyDB();

personalMovieDB.writeYourGenres();

personalMovieDB.showMyDB(personalMovieDB.private);

// const arr = [1, 2, 3, 6, 8, 9];

// arr.pop();
// arr.push(123);
// console.log(arr);

// arr.forEach(function(itemItself, arrayIndex, array) {
//   console.log(`Позиция элемента в массиве: ${arrayIndex}, 
// значение элемента: ${itemItself}, и весь массив: ${array}`);

// });
