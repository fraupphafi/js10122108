// 1. deepEqual
console.log(deepEqual({a:1, b:{c:2}},{a:1, b:{c:2}}));
console.log(deepEqual({a:1, b:{c:2}, d:1},{a:1, b:{c:2}}));

function deepEqual(obj1, obj2) {
    // первый этап - смотрим длину объектов
    let count1 = 0; 
    let count2 = 0;

    for (let key in obj1) {
        count1++;
    }

    for (let key in obj2) {
        count2++;
    }

    if (count1 !== count2) {
        return false;
    }

    // второй этап - сравниваем свойства

    for (let key in obj1) {
        if (!(key in obj2)) {
            console.log(`{ ${key} not in obj2 }`);
            return false;
        }    

        console.log(typeof(obj1[key]));
        console.log(typeof(obj2[key]));   

        if (obj1[key] !== obj2[key]) { // сравниваем значения
            
            return false;
        }

        // застряла на проверке значений, если они объекты
    }

    return true;
}

// Stackowerflow вариант. Прошу прокомментировать на разборе ДЗ
// function deepEqual(obj1, obj2) {
//     return JSON.stringify(obj1) === JSON.stringify(obj2);    
// }

// 2. styleToObj(str)
let str = 'position:fixed;border:1px solid red;color: red;';

function styleToObj(str) {
    let arr = str.split(';');
    let styles = {};   
    if (arr[arr.length - 1] == '') {
        arr.pop(arr,length);
    }
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i].split(':');        
        styles[temp[0]] = temp[1];
    }
    return styles;
}
console.log(styleToObj(str));
//===




// Задания из учебника

// 4.7 Массивы с числовыми индексами

// let styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-Ролл');
// console.log(styles);
// styles[styles.length - 2] = 'Классика';
// console.log(styles);
// let firstElem = styles.shift();
// console.log(firstElem);
// styles.unshift('Рэп', 'Регги');
// console.log(styles);
// ====

// Получить случайное значение из массива
// let arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
// let rand = Math.floor(Math.random() * arr.length);
// console.log(arr[rand]);
// ====

// Калькулятор для введённых значений
// let arr = [];
// let num = 0;
// let firstNum = Number(prompt('Введите первое число', '0'));
// let secondNum = Number(prompt('Введите второе число', '0'));
// arr.push(firstNum, secondNum);
// console.log(arr);
// addNumber();

// console.log(addNumber());

// function addNumber() {
//     num = Number(prompt('Введите число', null));   

//     if (isNaN(num) || num === null) {        
//         let result = 0;
//         for(let i =0; i < arr.length; i++) {
//             result += arr[i];
//             console.log(result);
//         }
//         return result;
//     }

//     arr.push(num);
//     console.log(arr);
//     addNumber();
// }
// ====

// Поиск в массиве
// function find(arr, value) {  
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === value) {
//             return i;
//         }
//     }
//     return -1;
// }

// let arr = ['test', 2, 1.5, false];
// console.log(find(arr, 'test'));
// console.log(find(arr, 2));
// console.log(find(arr, 1.5));
// console.log(find(arr, 0));
// ====

// Фильтр диапазона 
// function filterRange(arr, a, b) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] >= a && arr[i] <= b) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }

// let arr = [5, 4, 3, 8, 0];
// console.log(filterRange(arr, 3, 5));
// ====

//Решето Эратосфена 
// let arr = createArr(100);

// function createArr(num) {
//     let result = [];
//     for (let i = 0; i < num + 1; i++) {
//         result.push(i);
//     }
//     return result;
// }
// console.log(arr);

// for (let i = 2; i < arr.length; i++) {
//     if 
// }

//Подмассив наибольшей суммы

//4.8 Массивы: методы
// Добавить класс в строку
// let obj = {
//     className: 'open menu'
// };

// function addClass(obj, cls) {
//     let arr = obj.className.split(' ');
//     let obj2 = {};
//     for (let i = 0; i < arr.length; i++) {
//         obj2[arr[i]] = 'true';
//     }
//     obj2[cls] = 'true'; 
//     arr = Object.keys(obj2);
//     obj.className = arr.join(' ');
//     console.log(obj.className);
// }

// addClass(obj, 'new');
// addClass(obj, 'open');
// addClass(obj, 'me');

// Перевести текст вида border-left-width в borderLeftWidth
// function camelize(str) {
//     let arr = str.split('-');
//     if (arr[0] === '') {
//         arr.shift(0);
//     }

//     for (let i = 1; i < arr.length; i++) {
//         arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
//     }

//     let result = arr.join('');
//     console.log(result);
// }
// camelize('background-color');
// camelize('list-style-image');
// camelize('-webkit-transition');

// Функция removeClass

// let obj = {
//     className: 'open menu menu'
// };

// function removeClass(obj, cls) {
//     let arr = obj.className.split(' ');
//     console.log(arr);

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === cls) {
//             arr.splice(i , 1);
//             i--; // или можно массив перевести в объект для устранения повторяющихся классов
//         }
//     }
//     obj.className = arr.join(' ');
//     console.log(obj);

//     return obj;
// }   

// removeClass(obj, 'open');
// removeClass(obj, 'blabla');
// removeClass(obj, 'menu');
// ====

//Сортировать в обратном порядке 
// let arr = [5, 2, 1, -10, 8];

// arr.sort(compareNumeric).reverse();

// console.log(arr);

// function compareNumeric(a, b) {
//     return a - b;
// }
// ===

// Скопировать и отсортировать массив

// let arr = ["HTML", "JavaScript", "CSS"];

// // for (let i = 0; i < arr.length; i++) {
// //     sorted[i] = arr[i];
// // }

// let sorted = arr.slice().sort();

// console.log(arr);
// console.log(sorted);
// ====

// Сортировка объектов

// let vasya = { name: 'Вася', age: 23 };
// let masha = { name: 'Маша', age: 18 };
// let vovochka = { name: 'Вовочка', age: 6 };

// let people = [ vasya , masha , vovochka ];

// people.sort(sortByAge);

// for(let i = 0; i < people.length; i++) {
//     console.log(people[i].name);
// }

// function sortByAge(a, b) {
//     return a.age - b.age;
// }

// ===

// 4.8 Массивы: методы
// Перепишите цикл через map

// let arr = ['Есть', 'жизнь', 'на', 'Марсе'];
// let arrLength = arr.map(function(item){
//     return item.length;
// });
// console.log(arrLength);
