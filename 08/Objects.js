// Замість var

for (let i = 0; i < 5; i++) {

    console.log(i);

}

// Замість var
let message = 'test';

function example() {

    if (true) {

        const message = 'Hello, world!';

        console.log(message);

    }

    console.log(message); // Виведе 'Hello, world!'

}

const person = {

    name: 'John',

    age: 25,

    occupation: 'Developer'

};
for (const key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(`${key} ${person[key]}`);
    }
}
console.log("---------------------------");
const students = [

    { name: 'Alice', age: 20, grade: 'A' },

    { name: 'Bob', age: 22, grade: 'B' },

    { name: 'Charlie', age: 21, grade: 'C' }

];

for (const student of students) {
    console.log("Student:");
    
    for (const key in student) {
        console.log(`${key}: ${student[key]}`);
    }
    
    console.log("------");
}
