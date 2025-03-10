let num1 = Number(prompt('Введіть перше число'));
let operator = prompt('Введіть мат операцію:(+ ; - ; / ; *)');
let num2 = Number(prompt('Введыть друге число'));
function plus(a,b){
    return a+b;
}
function min(a,b){
    return a-b;
}
function division(a,b){
    return a/b;
}
function multiplication(a,b){
    return a*b;
}
switch (operator) {
    case '+':
        alert(`${num1} ${operator} ${num2} = ${plus(num1,num2)}`);
        break;

    case '-':
        alert(`${num1} ${operator} ${num2} = ${min(num1,num2)}`);
        break;
    case '/':
        alert(`${num1} ${operator} ${num2} = ${division(num1,num2)}`);
        break;
    case '*':
        alert(`${num1} ${operator} ${num2} = ${multiplication(num1,num2)}`);
        break;
    default:
        alert('не той символ було введено');
        break;
}



let UsresMass = ['Andrey','Ruslan','Artem'];
function HiUser(user) {
    console.log(`Welcome ${user}`);
}
function wellcomUser(users,callback) {
    for (let index = 0; index < users.length; index++) {
        callback(users[index]);
    }
}
wellcomUser(UsresMass,HiUser);

/*
const wellcomUser = (users, callback) => {
    for (let index = 0; index < users.length; index++) {
        callback(users[index]);
    }
};
*/
//попередня функція в стрілковуне знаю де її використати тому написав коментарем



const showMessage = (message = "Немає повідомлення") => {
    console.log(message);
};

showMessage("Привіт!"); // Виведе: Привіт!
showMessage(); // Виведе: Немає повідомлення за замовченням я сподіваюсь так правильно




const processString = (str, callback) => callback(str);

processString("Hello, world!", message => console.log(`Message: ${message}`));


function multiplyValues(a, b, c) {
    return a * b * c;
}
