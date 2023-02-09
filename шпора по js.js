'use strict';

                                        //---------------- ШТУКИ С ОБЪЕКТАМИ.---------------------//
arr.splice(index, 1); //обрезаем массив, index и кол-во удаляемых объектов


                              //------------- ПОЛУЧЕНИЕ И ДОБАВЛЕНИЕ ЭЛЕМЕНТОВ НА СТРАНИЦУ.---------------------//


const circles = document.querySelectorAll('.circle'),  //создаём переменную circles и присваиваем ей все элементы с классом circle
      wrapper = document.querySelector('.wrapper'), //переменная с элементом с классом wrapper
      hearts = wrapper.querySelectorAll('.heart'); //получаем все эл. с классом heart уже только ВНУТРИ wrapper

circles.forEach((item) => {
  item.style.backgroundColor = 'green';  //перекрашиваем каждый элемент в массиве circles в зеленый
  // item.style = 'background-color = green;'; //делает то же
});

let someElement = document.createElement('div'); //присваиваем переменной someElement создаваемый элемент с тегом div
someElement.classList.add('black'); //добавляем someElement-ту класс black

wrapper.append(someElement);  //добавялем элемент someElement внутрь элемента с классом wrapper. Добавляется в конец
// wrapper.prepend(someElement); //то же самое, но добавляется в начало wrapper-а


hearts[0].before(someElement); //Выбираем ПЕРВЫЙ элемент из hearts, добавляем ПЕРЕД ним элемент (не внутрь него как раньше)
// hearts[1].after(someElement); //аналогично предыдущему, но вставляет ПОСЛЕ элемента

circles[0].remove(); // удаляет первый кружок

hearts[0].replaceWith(circles[0]); //заменяем первое сердечко на первый кружок, который мы кста удалили предыдущим действием

someElement.innerHTML = '<h1>Hello world</h1>'; //добавляем тег с текстом внутрь блока
someElement.innerHTML += '<h1>Hello world</h1>'; //ТАК МОЖНО ВНУТРЬ ЭЛЕМЕНТА СКОЛЬКО УГОДНО ГОВНА ДОБАВЛЯТЬ И ДОБАВЛЯТЬ
someElement.textContent = 'Hello world';

// эти штуки ниже в принципе логичны если переводить их на русский
someElement.insertAdjacentHTML("beforebegin", "<h2>beforebegin</h2>"); //вставляем HTML блок СНАРУЖИ ПЕРЕД элементом (не внутри а снаружи)
someElement.insertAdjacentHTML("afterend", "<h2>afterend</h2>"); //вставляем HTML блок СНАРУЖИ ПОСЛЕ элемента (не внутри а снаружи)
someElement.insertAdjacentHTML("afterbegin", "<h2>afterbegin</h2>"); //вставляем HTML блок ВНУТРЬ элемента в начало
someElement.insertAdjacentHTML("beforeend", "<h2>beforeend</h2>"); //вставляем HTML блок ВНУТРЬ элемента, в конец

btn.parentElement.remove(); //удаляем родителя элемента btn

                                //------------- СОБЫТИЯ. ОБРАБОТЧИКИ СОБЫТИЙ.---------------------//


const btn = document.querySelector('button');

// btn.onclick = function () {  это непрактичная конструкция, так как она ЗАМЕНЯЕТ весь предыдущий функционал для этой
//   alert('Пенис');            переменной. Лучше использовать следующую вещь 
// };

btn.addEventListener('click', () => {  //с такой конструкцией можно ДОБАВЛЯТЬ новый функционал не уничтожая старый. Можно просто взять и 
  alert('Какашка');                    //ctrl+c ctrl+v эту конструкцию, и тогда alert будет выводиться дважды! Пиздато я считтаю.
});

const reColorElement = (e) => {               //создаем функцию к которой обращаемся через пару строк. Она 
  document.querySelectorAll('button')[1].style.backgroundColor = 'black'; // перекрасит одну кнопку при клике по другой
  console.log(e.target);   // а тут мы получаем сам элемент на который повешено событие
};

btn.addEventListener('click', reColorElement); // reColorElement это просто функция которая выполнится при клике на элемент
btn.removeEventListener('click', reColorElement); //тут мы удаляем event listener


//----

let i = 0;  //переменная счетчик, будет увеличиваться каждый раз при срабатывании event lister-а
const reColorElement = (e) => {               
  e.target.style.backgroundColor = 'black'; //перекрашиваем кнопку
  console.log(e.target, i);
  i++;  //увеличиваем счётчик
  if (i == 5) {
    e.target.style.backgroundColor = ''; //при срабатывании счётчика i == 5 пишем пустой стиль благодаря чему он исчезает
    btn.removeEventListener('click', reColorElement);  //вот тут-то он и исчезает
  }
};

btn.addEventListener('click', reColorElement);

//----

wrapper.addEventListener('click', (event) => { //Добавляем eventListener родиделю (может быть пздц сколько вложенностей в этом HTML элементе wrapper, но
  if (event.target && event.target.matches('a')) {                   //ему пофиг, он всё равно найдёт нужный элемент благодаря matches(), в скобках любой селектор )
      console.log('Это внатуре тег "a" чювак', event.target.tagName); //тут можно непосредственно к тэгу элемента обратиться с помощью tagName. Если че, то он вернёт тэг КАПСОМ
  }
});
