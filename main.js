"use strict";

function transfor(str) {
    console.log(str);
    let lastChar;
    let curLetter; 
    let lastCharCount
    let result = '1' + str[0]; // сразу берем первую букву в количестве 1

    for (let i = 1; i < str.length; i++) { // последовательно проверям строку

        curLetter = str[i];
        lastChar = result[result.length - 1];

        if (curLetter === lastChar) {  
            lastCharCount = +result[result.length - 2];
            lastCharCount++;
            result = result.slice(0, result.length - 2) + lastCharCount + lastChar;            
        } else {            
            result = result + 1 + curLetter;
        }       
    }
    console.log(result);
    return result;    
}

transfor('aabbbaccaa');
transfor('qqwweerrttyyyyy');

// Задания из учебника

// (function(){
//     let a = +prompt('первое число', '');
//     let b = +prompt('второе число', '');
//     let result =  (a + b < 4) ? 'Мало' : 'Много';
//     alert(result);
// })();

// 2.13 Логические операторы 

// (function(){
//     let age = +prompt('первое ваш возраст', '');
//     // if (!(age >= 14 && age <= 90)) {
//     //     alert('Недопустимо');
//     // } else {
//     //     alert('Подходит');
//     // }

//     if (age < 14 || age > 90) {
//         alert('Недопустимо');
//     } else {
//         alert('Подходит');
//     }
// })();

// 2.15 Циклы while, for

// (function(){ // Вывести четные числа
//    for (let i = 1; i <= 20; i++) {
//        if (i % 2 == 0) {
//             alert(i);
//        }
//    }   
// })();

// (function(){ // Переписать for на while
//     let i = 0;
//     while (i < 3) {
//         alert( "номер " + i + "!" );
//         i++;
//     } 
// })();

// (function(){ // Запрашивать до верного значения
//     let currentValue;   
//     do {
//         currentValue = +prompt('Введите число больше 100', 0);       
//     } while (currentValue < 100 && currentValue != 0)
// })();

// function showSimpleNumbers(){ // ****Вывести натуральные числа в диапазоне***

//     let x = 2;
//     let k = 20;

//     for (let n = x; n <= k; n++) { // перебор диапазона чисел

//         for (let i = 2; i <= n; i++) { // проверка каждого
//             if (n % i == 0) {
//                 if (i == n) {
//                     alert(n + ' простое')
//                 } else {                    
//                     break;
//                 }        
//             }
//         }
//     } 
// };

//4.3 Строки (вариант с усечением первых символов не чисел)
// function extractCurrencyValue(str) {  
//     if (!(isNaN(str[0]))) {
//         return +str;        
//     } else {
//         str = str.slice(1);        
//         extractCurrencyValue(str);
//     }
// }

// extractCurrencyValue('$$$$333');
// extractCurrencyValue('22120');
