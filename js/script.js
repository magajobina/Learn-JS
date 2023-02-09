window.addEventListener('DOMContentLoaded', () => { 

  const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

  function hideTabContent() {
    tabsContent.forEach(item => { //выбираем все табы
      item.classList.add('hide'); //скрываем все табы
      item.classList.remove('show'); //скрываем все табы
    });

    tabs.forEach(item => { //выбираем все кнопки переключения табов
      item.classList.remove('tabheader__item_active'); //удаляем со всех класс активности
    });
  }
  
  function showTabContent(i = 0) { //тут i = 0 делает этому аргументу значение по умолчанию. Конечно если в аргумент что-то передаётся, то он уже не равен нулю
    tabsContent[i].children[0].classList.add('fade'); //добавляем дочернему элементу под индексом 0 (тут это картинка) класс fade
    tabsContent[i].classList.add('show'); //добавляем класс show нужному элементу
    tabsContent[i].classList.remove('hide'); //удаляем класс hide
    tabs[i].classList.add('tabheader__item_active'); //добавляем эл кнопки под нужным идексом класс активности
  }
  
  hideTabContent();
  showTabContent();

  tabsParent.addEventListener('click', (event) => {
    const target = event.target; //это мы обращаемся к элементу на который кликнули, и помещаем в переменную для краткости записи

    if (target && target.classList.contains('tabheader__item')) { //условие если мы кликнули куда и было надо, т.е. на эл с указанным классом, то...
      tabs.forEach((item, i) => { //перебираем все кнопки переключения табов
        if (item == target) { //если перебираемый элемент(item) совпадает с тем что мы нажали(target)
          hideTabContent(); //то мы сначала скрываем все табы и удаляем все классы активности для кнопок
          showTabContent(i); //а затем показываем таб с порядковым номером i, и вешаем класс на кнопку под тем же порядковым номером, и оно
                            //идеально совпадет потому что кол-во кнопок такое же как и кол-во табов
        }
      });
      
    }
  });

                                                                  // Модальное окно //

const modalButton = document.querySelectorAll('[data-modal]'),
      modalClose = document.querySelector('[data-close]'),
      modalWindow = document.querySelector('.modal'),
      body = document.querySelector('body');

function closeModal () {
  modalWindow.classList.add('hide');        //закрываем модалку
  modalWindow.classList.remove('show');        
  body.style.overflow = '';  //разрешаем прокрутку
}
function showModal () {
  modalWindow.classList.add('show');        //и делаем ему display block
  modalWindow.classList.remove('hide');        //убираем display none
  body.style.overflow = 'hidden';  //запрещаем прокрутку
  clearInterval(modalTimerId);
}

modalButton.forEach(item => { 
  item.addEventListener('click', showModal); //вешаем ивент листенер на каждую кнопку с функционалом в функции showModal
  
});

modalWindow.addEventListener('click', (event) => { //вешаем event listener На модальное окно
  event.preventDefault();
  console.log(event.target); //в консоль выводит то что мы непосредственно жмякнули для отслеживания и для отладки
  if (event.target === modalWindow || event.target === modalClose) { // проверяем если нажали на оверлей (modalWindow) или если на крестик (modalClose), то...
    closeModal();
  }
});

document.addEventListener('keydown', (e) => { //вешаем event Listener на весь документ чтоб отследить нажатие клавиши
  if (e.code === 'Escape' && modalWindow.classList.contains('show')) { //если клавиша Escape и модальное окно показывается то...
    closeModal();
    console.log(e);
  }
});

const modalTimerId = setTimeout(showModal, 300000); //показывает модальное окно через некоторое время после попадания на страницу
//(или скорее после прогрузки DOM дерева, не забываем что мы находимся внутри ивента DOMContentLoaded)

function showModalByScroll() {
  if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1) { //смещение странички от верха (тип уже проскроленное) + 
    //высота пользовательского окна >= высоте всей странички
    showModal();
    window.removeEventListener('scroll', showModalByScroll);
  }
}
window.addEventListener('scroll', showModalByScroll);

function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
}

let Ivan = new User('Ivan', 23);
Ivan.baba = true;
console.log(Ivan);



});
