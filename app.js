const USERS = [
    {
        login: 'admin',
        password: '1234',
    },
    {
        login: 'beka',
        password: '4321',
    },
    {
        login: 'asan',
        password: '1212',
    },
];

const checkUser = (login, password) => {
    let i = 0;
    let response = false;
    while (i < USERS.length) {
        if (login === USERS[i].login && password === USERS[i].password) {
            response = true;
            break;
        }
        i++;
    }
    return response;
};

for (let j = 0; j < 3; j++) {
    let login = prompt('Login?');
    let password = prompt('Password?');
    let found = false;
    if (checkUser(login, password) === true) {
        console.log(`Welcome!`);
        j = 3;
        found = true;
    }
    if (found === false) console.log(j < 2 ? `incorrect ${ 3 - j - 1 }` : 'blocked');
}