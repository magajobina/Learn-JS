/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
movieDB.movies.sort();

const advBanners = document.querySelectorAll('.promo__adv img'),
    genre = document.querySelector('.promo__genre'),
    replaceBG = document.querySelector('.promo__bg'),
    films = document.querySelectorAll('.promo__interactive-item'),
    movieList = document.querySelector('.promo__interactive-list');

    films.forEach(item => {
        item.remove();
    });

    movieDB.movies.forEach((filmName, i) => {//Тут мы добавляем HTML структурЫ с калом в нужное место
        movieList.innerHTML += `
        <li class="promo__interactive-item">${i+1}. ${filmName}
            <div class="delete"></div>
        </li>
    `;
    });

advBanners.forEach(item => {
    item.remove();  //удаляем рекламу
});

genre.textContent = 'ДРАМА'; //заменяем текст внутри элемента

console.log(replaceBG);

// replaceBG.style = 'background:url("../img/bg.jpg") center center/cover no-repeat; background-position: top;'; //это как я сделал
replaceBG.style.backgroundImage = 'url("img/bg.jpg")'; //это как сделал преподаватель


