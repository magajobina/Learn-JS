window.addEventListener('DOMContentLoaded', () => { 

  const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

  function hideTabContent() {
    tabsContent.forEach(item => { //выбираем все табы
      item.style.display = 'none'; //скрываем все табы
    });

    tabs.forEach(item => { //выбираем все кнопки переключения табов
      item.classList.remove('tabheader__item_active'); //удаляем со всех класс активности
    });
  }
  
  function showTabContent(i = 0) {
    tabsContent[i].style.display = 'block';
    tabs[i].classList.add('tabheader__item_active');
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








  // console.log(tabs[0].classList);






});
