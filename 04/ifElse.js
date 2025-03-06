let num1 = prompt('Enter first num');
let num2 = prompt('Enter second num');
let num3 = prompt('Enter third num');
num1 = Number(num1);
num2 = Number(num2);
num3 = Number(num3);
if (num1 > num2 && num1 > num3) {
    alert(`${num1} is greater`);
} else if (num2 > num3) {
    alert(`${num2} is greater`);
} else {
    alert(`${num3} is greater`);
}
let month = prompt("Enter the month number (1-12):");
month = Number(month);

if (month >= 3 && month <= 5) {
    console.log("Spring");
} else if (month >= 6 && month <= 8) {
    console.log("Summer");
} else if (month >= 9 && month <= 11) {
    console.log("Autumn");
} else if (month == 12 || month == 1 || month == 2) {
    console.log("Winter");
} else {
    console.log("Invalid month number");
}
let NUM = prompt("Enter the number");
NUM = Number(NUM);
if(NUM>0){
    alert('This is positive number')
}else if(NUM == 0){
    alert('This is ZERO')
}else{
    alert('This is negative')
}
let angle = prompt("Enter the angle in degrees:");
angle = Number(angle); 

let type = (angle > 0 && angle < 90) ? "Acute angle" : 
           (angle > 90 && angle < 180) ? "Obtuse angle" : 
           "Not an acute or obtuse angle";

console.log(type);
let score = prompt("Enter your test score (0-100):");
score = Number(score); 
let grade = (score >= 90) ? "A" :
            (score >= 80) ? "B" :
            (score >= 70) ? "C" :
            (score >= 60) ? "D" : "F";

console.log(`Before increment: Grade = ${grade}, Score = ${score}`);

score++;

let newGrade = (score >= 90) ? "A" :
               (score >= 80) ? "B" :
               (score >= 70) ? "C" :
               (score >= 60) ? "D" : "F";

console.log(`After increment: Grade = ${newGrade}, Score = ${score}`);

let result = (score >= 60) ? "Passed" : "Failed";
console.log(`Result: ${result}`);
