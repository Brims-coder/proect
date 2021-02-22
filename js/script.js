'use strict';
//   const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// const personalMovieDB = {
// count: numberOfFilms,
// movies: {},
// actors: {},
// genres: [],
// privat: false
// };
// const a = prompt('Один из последних просмотренных вильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных вильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

//  personalMovieDB.movies[a] = b;  
//  personalMovieDB.movies[c] = d;  
 
//  console.log(personalMovieDB);

// if (4==4) {
//     console.log('Ok');
// } else {
//     console.log('Error');
// }

// const num = 50;
// if (num<49) {
//     console.log('Error');
// } else if (num>100) {
//     console.log('много!');
// } else {
//     console.log('Ok');
// }

// const nam = 50;
// (nam === 50) ? console.log('OK') : console.log('Error');

// const num = 50;
// switch (num) {
// case 49 : 
// console.log('no');
// break;
// case 100 :
//     console.log('no');
//     break;
//     case 50 :
//         console.log('yes');
//         break;
//         default:
//             console.log('no');
//             break;

// }

// let num = 50;
// // while (num < 55) {
// //     console.log(num);
// //     num++;
// // }
// do {
//     console.log(num);
//     num++;
// }
// while(num<=55);

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/





'  use strict';
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
count: numberOfFilms,
movies: {},
actors: {},
genres: [],
privat: false
};
 
 for (let i = 1; i < 2; i++) {
    const a = prompt('Один из последних просмотренных вильмов?', ''),
          b = prompt('На сколько оцените его?', '');
         

          if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
          } 
else {
    console.log('error');
    i--;
   
}
}

if (personalMovieDB.count < 10) {
  console.log("Просмотрено довольно мало фильмов");
 } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
   console.log("Вы классический зритель");
 } else if (personalMovieDB.count >= 30) {
console.log ("Вы киноман");
 }
else {
  console.log("Произошла ошибка");
}
 console.log(personalMovieDB);
