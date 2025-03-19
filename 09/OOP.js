class Person {
    constructor(name, age) {
      this.name = name; 
      this.age = age;   
    }
    sayHello(){
        console.log(`Hello ${this.name} you have ${this.age}`);
    }
}
  
let john = new Person("John", 30);

john.sayHello();
console.log(john);
  
class Student extends Person{
    constructor(name, age,StudID){
        super(name,age);
        this.ID = StudID;
    }
    study(){
        console.log(`Hello ${this.name} your ID is ${this.ID}`);
    }
}
let Alice = new Student("Alice", 27, 's3809');
Alice.study();
console.log(Alice);