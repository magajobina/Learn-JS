/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */


'use strict';
document.addEventListener('DOMContentLoaded', () => {  //теперь наша колбек функция (т.е. весь код) будет работать только после загрузки DOM дерева



const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Одержимостььтьтьтьтьтьтьтьтьтьтьтьт",
        "Скотт Пилигрим против..."
    ]
};

const advBanners = document.querySelectorAll('.promo__adv img'),
    genre = document.querySelector('.promo__genre'),
    replaceBG = document.querySelector('.promo__bg'),
    movieList = document.querySelector('.promo__interactive-list');
let addForm = document.querySelector('form.add'),                         //получаем всё что в теге form
    addInput = addForm.querySelector('.adding__input'),
    checkBox = addForm.querySelector('[type="checkbox"]');


addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (addInput.value) { //смотрим чтоб инпут вообще пустым не был. Если хоть чёт есть, тогда выполняем
        movieDB.movies.push(addInput.value);
        createMovieList();
        addInput.value = '';
        if (checkBox.checked) {
            console.log("Добавляем любимый фильм");
        }
    }
});

createMovieList();

function createMovieList () {
    movieList.innerHTML = '';  //удаляем весь прошлый список элементов со страницы и даьше в этом цикле занимаемся отрисовкой нового списка
    movieDB.movies.sort();  // сортирует по алфавиту эл массива movies
    movieDB.movies.forEach((filmName, i) => {  //Тут мы будем добавлять HTML структуры в нужное место
        function checkTheLength() { //эта функция проверяет длину названия фильма, если больше 21 символа то обрезает до 21го и добавляет точки в конце
            let result = filmName; //filmName берётся из внешней функции forEach
            if (filmName.length > 21) {
                result = filmName.substring(0, 21) + '...';
            }
            return result; //возвращаем результат (обработанную строку) в место вызова функции (там где HTML код добавляется на страницу)
        }
        //Тут мы добавляем HTML структуры в нужное место
        movieList.innerHTML += `
        <li class="promo__interactive-item">${i+1}. ${checkTheLength()}
        <div class="delete"></div>
        </li>
        `; 
    });
    document.querySelectorAll('.delete').forEach((btn, i) => { //навешиваем обработчик событий на каждую кнопку .delete 
        btn.addEventListener('click', () => {
            btn.parentElement.remove(); //удаляем родителя
            movieDB.movies.splice(i, 1); //обрезаем массив
            createMovieList(); //заново отрисовываем и сортируем
        });
    });
}

advBanners.forEach(item => {
    item.remove();  //удаляем рекламу
});

genre.textContent = 'ДРАМА'; //заменяем текст внутри элемента

// replaceBG.style = 'background:url("../img/bg.jpg") center center/cover no-repeat; background-position: top;'; //это как я сделал
replaceBG.style.backgroundImage = 'url("img/bg.jpg")'; //это как сделал преподаватель



});
