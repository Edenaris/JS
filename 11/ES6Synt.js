//Тема: Spread
let fArr = [1,2,3,4];
console.log(fArr);
let sArr = [...fArr,5,6,7,8];
console.log(sArr);
//Тема: Rest
function Ffunction(Str,...arg){
    console.log(Str,arg)
}
Ffunction("Hello",1,2,3,4)

function getAverage(...numbers) {
    if (numbers.length === 0) return 0; 

    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }

    return sum / numbers.length;
}
console.log(getAverage(5, 15));
//Тема: TypeOf
function TOF(args) {
    console.log(`Tipe of this information is ${typeof args}`);
}
TOF(true);
let sumet = prompt("Enter summething like Bolean, number or string:");
function TOFT(args) {
    alert(`Tipe of this information is ${typeof args}`);
}
TOFT(sumet);