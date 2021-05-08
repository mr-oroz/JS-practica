// const beeline = document.getElementById('beeline');
// const megacom = document.getElementById('megacom');
// const oshka = document.getElementById('oshka');
// const codes = [
//     { operator: 'Мегаком', code: '559' },
//     { operator: 'Мегаком', code: '558' },
//     { operator: 'Мегаком', code: '559' },
//     { operator: 'Мегаком', code: '556' },
//     { operator: 'Мегаком', code: '555' },
//     { operator: 'Мегаком', code: '554' },
//     { operator: 'Мегаком', code: '553' },
//     { operator: 'Мегаком', code: '552' },
//     { operator: 'Мегаком', code: '551' },
//     { operator: 'Билайн', code: '770' },
//     { operator: 'Билайн', code: '771' },
//     { operator: 'Билайн', code: '772' },
//     { operator: 'Билайн', code: '773' },
//     { operator: 'Билайн', code: '774' },
//     { operator: 'Билайн', code: '775' },
//     { operator: 'Билайн', code: '776' },
//     { operator: 'Билайн', code: '777' },
//     { operator: 'Билайн', code: '778' },
//     { operator: 'Билайн', code: '779' },
//     { operator: 'O', code: '500' },
//     { operator: 'O', code: '501' },
//     { operator: 'O', code: '502' },
//     { operator: 'O', code: '504' },
//     { operator: 'O', code: '505' },
//     { operator: 'O', code: '506' },
//     { operator: 'O', code: '507' },
//     { operator: 'O', code: '508' },
//     { operator: 'O', code: '509' },
// ];
// const phone_number = prompt('напишите номер');
// let found = null;
// if (phone_number.length === 9 || (phone_number.length === 10 && phone_number.substr(1, 3) === '0') || (phone_number.length === 12 && phone_number.substr(0, 3) === '996') || (phone_number.length === 13 && phone_number.substr(0, 4) === '+996')) {

//     const operator = phone_number.substr(-9);
//     const phone = operator.substr(0, 3);
//     for (let i = 0; i < codes.length; i++) {
//         if (phone === codes[i].code) {
//             found = codes[i];
//         }
//     } if (found) {
//         console.log(`${found.operator} тариф!`)
//     } else {
//         found.operator
//         console.log('Not found!')
//     }
// }
// else {
//     console.log('Invaled format!')
// }
// if (found.operator === 'Мегаком') {
//     megacom.style.display = 'block'
// } else if (found.operator === 'Билайн') {
//     beeline.style.display = 'block'
// } else if (found.operator === 'O') {
//     oshka.style.display = 'block'
// }



