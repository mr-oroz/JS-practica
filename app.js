let i = 4;
let Login = prompt('Логин');
let Password = prompt('Пароль');
let pass = '123';
let user = 'Oroz';
let founds = false;
while (i > 0) {
    if (Login === user && Password === pass) {
        alert('Добро пожаловать');
        i = 0;
    } else {
        alert(`Попробуйте еще раз. У вас ещё ${i - 1} попытки`)
        User = prompt('Логин');
        Password = prompt('Пароль');
        i--;
    }
    if (founds === false) {
        if (i === 1) {
            alert('Попрубуйте пожзе');
            i = 0;
        }
    }
}