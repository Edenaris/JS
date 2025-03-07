let figur = prompt('Введіть коло, квадрат чи трикутник');
switch (figur) {
    case 'коло':
    case 'Коло':    
         alert("0 кутів");
        break;
    case 'квадрат':
    case 'Квадрат':        
          alert("4 кута");
        break;
    case 'трикутник':
    case  'Трикутник':        
          alert("3 кута");
        break;
}


let numbr = Number(prompt('Enter the number'));
let i = 0;
while (numbr>0) {
    if (numbr%2 === 0) {
        i += numbr;
    }
    numbr -= 1;
}
alert(i);



let numbr1 = Number(prompt('Enter the number for multiplication table'));
for (let i = 0; i<11; i++ ) {
  console.log(`${i} * ${numbr1} = ${i * numbr1}`);
}
for (let i = 10; i>0; i-- ) {
    console.log(`${i}`);
}



let numbr4 = Number(prompt('Enter the Number'));
for (let index = 0; index < 1000; index++) {
    if (numbr4%2 === 0) {
        alert(`${numbr4} is even`);
        break
    }else{
        alert(`${numbr4} is odd`);
        break
    }
    
}



for (let num = 1; num <= 10; num++) {
    if (num % 2 === 0) {
        console.log(`First even number: ${num}`);
        break; 
    }
}


for (let num = 1; num <= 10; num++) {
    if (num % 2 === 0) {
        console.log(num);  
    }
}
