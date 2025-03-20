
// Написати гру "Камінь, ножниці, папір"  дані користувач отримує через prompt, а результат гри виводити використовуючи alert
let choy = prompt("Виберіть (Камінь, ножиці чи папір)");
choy = choy.toUpperCase();
choy = choy.trim();
let nm = 0;
// 1 = камінь 2 = ножиці 3 = папір
switch (choy) {
    case 'КАМІНЬ':
        nm = 1;
       break;
    case 'НОЖИЦІ':
        nm = 2;
       break;
    case 'ПАПІР':
        nm = 3;
       break;
    default:
        alert(`Неправильно введені дані`);
        break;
}

let choyT = Math.random();
choyT = (Math.floor(choyT * 3) + 1);

if (nm == 1 && choyT == 2) {
    alert('Ви виграли');
}
else if(nm == 2 && choyT == 3){
    alert('Ви виграли');
} 
else if(nm == 3 && choyT == 1){
    alert('Ви виграли');
}
else if(nm == choyT){
    alert('Нічия');
}
else{
    alert('Ви пограли');
}



//Завдання для Math.min та Math.max:
function getMin(a, b) {
    return Math.min(a, b);
}
function getMax(a, b) {
    return Math.max(a, b);
}
//Завдання для Math.pow:
function getPow(a, b) {
    console.log(Math.pow(a, b));
}
//Завдання для Math.floor та Math.ceil:
function getFloor(a) {
    console.log(Math.floor(a));
}
function getCeil(a) {
    console.log(Math.ceil(a));
}
//Завдання для Date.getYear:
function getBirthYear(age) {
    let currentYear = new Date().getFullYear(); 
    return currentYear - age; 
}
//Завдання для Date.toLocaleString:
let currentDate = new Date();
let formattedDate = currentDate.toLocaleString();
console.log("Поточна дата і час:", formattedDate);

//Завдання для String.split та toUpperCase:
let sentence = "javascript це круто";
let wordsArray = sentence.split(" ");
let upperCaseWords = wordsArray.map(word => word.toUpperCase());
console.log(upperCaseWords);
