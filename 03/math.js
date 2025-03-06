let num1 = prompt('Enter first num');
let num2 = prompt('Enter second num');
let equ = num1 == num2;
alert(equ);
let num3 = prompt('Enter not even or paired even num');
let checkNum = num3 % 2;
console.log(checkNum > 0);
let age = prompt('Enter age'); 
alert(age < 18 && "Доступ заборонено" || "Доступ дозволено");
let price = prompt("Введіть ціну товару:");
let quantity = prompt("Введіть кількість товару:");
let totalCost = price * quantity;
console.log(`Загальна вартість: ${totalCost}`);
let price2 = prompt("Введіть вартість товару:");
let discount = price * 0.5;
alert(`Сума знижки: ${discount}`);


