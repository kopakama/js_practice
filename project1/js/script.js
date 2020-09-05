/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    private: true
};

function rememberMyFilms(){
    for (let i = 0; i < 2; i++) {
        let movie = prompt('Один из последних просмотренных фильмов?');
        let rate = +prompt('На сколько оцените его?');
        if (movie != null && rate != null & movie != '' && rate != '' && movie.length < 50) {
            personalMovieDB.movies[movie] = rate;
            console.log("done");
        } else {
            console.log("error");
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB >= 10 && personalMovieDB < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.private == false) {
        console.log(personalMovieDB);
    } else {
        console.log("Вам запрещено просматривать данную информацию");
    }
}



function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        let genre = prompt(`Ваш любивый жанр под номером ${i}`);
        personalMovieDB.genres[i] = genre;
    }
}

showMyDB();
