// // ОПЕРАТОРЫ

// 1 + 5
// 5 - 2
// 5 * 5
// 10 / 2
// 1 === '1'
// 1 == '1'
// 'Hello' != 'Privet'
// 1 !== '1'
// 1 > 5
// 5 < 5
// 5 <= 5
// 5 >= 6
// 10 % 3

// if (con) {

// }

// if (con) {

// } else {

// }

// if (con) {

// } else if (con2) {

// } else {

// }

// con ? pos : neg;

// let name = 'Asan';
// let greeting = 'Hello, ' + name + '!';
// let new_greeting = Hello, ${ name }!;

// const NAME = 'Uson';

// for (let i = 0; i < 5; i++) {
//     console.log(10 * i);
// }

// let j = 0;
// while (j < 5) {
//     if (j === 2) {
//         j++;
//         continue;
//     }
//     if (j % 2 === 0) console.log(`while: ${j}`);
//     j++;
// }

// let num = 0;
// num++;
// ++num;
// num += 3;
// num -= 2;
// num + 5;
// console.log(num);

// let _string = 'Asan';
// let _array = ['A', 'B', 'C', 2311, '123'];
// let _object = { name: 'Asan', surname: 'Nurbekov' };
// let _number = 12;
// let _boolean = 5 < 1;

// console.log(_string.length);
// console.log(_array.length);
// console.log(_array[1]);
// console.log(_array[1].length);
// console.log((_array[3] + '').length);
// console.log(_array[3] + ''); // convert from number to string
// console.log(+_array[4]); // convert from string to number

// let a; // undefined
// let b = null;
// let c = NaN; // to check ==, use isNaN function

// let languages = [
//     {
//         language: 'ru',
//         title: 'Русский',
//         global: false,
//         countries: ['kyrgyzstan', 'kazakhstan', 'ukraina'],
//     },
//     {
//         language: 'en',
//         title: 'English',
//         global: true,
//         countries: ['kyrgyzstan', 'china'],
//     },
// ];

// for (let i = 0; i < languages.length; i++) {
//     if (languages[i].countries.length > 2 || languages[i].global) {
//         console.log(languages[i].title);
//     }
// }

// if (undefined) { } // false
// if (NaN) { } // false
// if (null) { } // false
// if ("") { } // false
// if (0) { } // false

// if (!true) { } // false
// if (!false) { } // true

// let obj1 = { name: 'Asan', surname: 'Nurbekov' };
// if ('name' in obj1) { } // true
// if ('hello' in obj1) { } // false
// if ('surname' in obj1) { } // true
// if (!('surname' in obj1)) { } // false