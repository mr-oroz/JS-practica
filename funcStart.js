//
// const Week = [
//     "понедельник",
//     "вторник",
//     "Среда",
//     "Четверг",
//     "Пятница",
//     "Субота",
//     "Воскрсение",
// ]
//
// const getWeekName = (a) => {
//     let i = 0;
//     let found = false
//     for (i = 0; i < Week.length; i++) {
//         if (a === i) {
//             console.log(Week[i]);
//             found = true;
//             break;
//         }
//     } if (found === false) {
//         console.log('error')
//     }
// }

// const getWeekName = (i) => {
//     i = +1;
//     if (!isNaN(i)) {
//         if (i >= 1) {
//             return Week[(i % 7)- 1];
//         } else {
//             console.log('Invalide number!')
//         }
//     } else{
//         console.error('Type a number')
//     }
// };
// console.log(getWeekName(prompt('num')));

