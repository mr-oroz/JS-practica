const Admins = [
    {
        Login: "Asan",
        pass: "123",
    },
    {
        Login: "Uson",
        pass: "1234",
    },
    {
        Login: "Oroz",
        pass: "12345",
    },
];

// let i = 0;

// for (i = 0; i < Admins.length; i++) {
//     let Login = prompt(`${Admins[i].Login}!`);
//     if (Login === Admins[i].pass) {
//         alert(`Welcome ${Admins[i].Login}`)
//     } else {
//         i--;
//         alert('Неверный пароль!')
//         if(i > 1) {s
//             alert('error')
//         } else {
//             alert('block')
//         }
//     }
// }

let i = 0;
while (i < Admins.length) {
    let Login = prompt(`${Admins[i].Login} password!`);
    if (Login === Admins[i].pass) {
        alert(`Welcome ${Admins[i].Login}`)
        i++;
    } else {
        i--;
        alert('Неверный пароль!')
        if (i > 1) {
            alert('error')
        } else {
            alert('block')
        }
    }
}
