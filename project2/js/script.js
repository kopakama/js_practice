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

// 1)
document.querySelector(".promo__adv").remove();

// 2)
document.querySelector(".promo__genre").textContent = "ДРАМА";

// 3)
document.querySelector(".promo__bg").style.backgroundImage = "url('../img/bg.jpg')";


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
movieDB.movies.forEach(element => {
    console.log(element);
});

const promoItem = document.querySelectorAll('.promo__interactive-item');
promoItem.forEach(element => {
    element.remove();
});

const promoList = document.querySelector('.promo__interactive-list');





movieDB.movies.forEach((element, i) => {
    promoList.innerHTML += `<li class="promo__interactive-item">
                                ${i + 1}. ${element}
                                <div class="delete"></div>
                                </li>`;
});




