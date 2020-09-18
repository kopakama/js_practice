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

document.addEventListener('DOMContentLoaded', () => {
    // 1)
    document.querySelector(".promo__adv").remove();

    // 2)
    document.querySelector(".promo__genre").textContent = "ДРАМА";

    // 3)
    document.querySelector(".promo__bg").style.backgroundImage = "url('../img/bg.jpg')";

    const promoList = document.querySelector('.promo__interactive-list'),
          promoItem = document.querySelectorAll('.promo__interactive-item'),
          addForm = document.querySelector('form.add'),
          inputForm = document.querySelector('.adding__input'),
          makeFavCheckbox = document.querySelector('[type="checkbox"]'),
          deleteBtns = document.getElementsByClassName('delete');
    
          const movieDB = {
            movies: [
                "логан",
                "лига справедливости",
                "ла-ла лэнд",
                "одержимость",
                "скотт Пилигрим против..."
            ]
    };


    promoItem.forEach(element => {
        element.remove();
    });

    //задания



    //добавляем все элементы из базы в верстку
    const addItemsFromDB = function(){
        promoList.innerHTML = '';
        movieDB.movies.sort();
        movieDB.movies.forEach((element, i) => {
            promoList.innerHTML += `<li class="promo__interactive-item">
                                        ${i + 1}. ${element}
                                        <div class="delete"></div>
                                        </li>`;
    });
        for(let i = 0; i < deleteBtns.length ; i++) {
            deleteBtns[i].addEventListener('click', () => {
                movieDB.movies.splice(i, 1);
                addItemsFromDB();
            });
        }
    };

    //добавляем фильм в базу и верстку. при длинном названии три точки в конце
    const addItem = function(i){
        movieDB.movies.push(inputForm.value);
        if(movieDB.movies[i].length > 21){
            movieDB.movies[i] = movieDB.movies[i].slice(0, 21) + '...';
        }
        movieDB.movies.sort();
        addItemsFromDB();
    };


    //при клике добавляем фильм в верстку
    addForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if(inputForm.value != ''){
            addItem(movieDB.movies.length);
            if(makeFavCheckbox.checked == true){
                console.log('Добавляем любимый фильм');
            }
        }
        e.target.reset();
    });


    addItemsFromDB();

    
});











