// push  
let arr1 = [];  
arr1.push(1, 2, 3, "hello");  

const addElement = (arr, elem) => {  
    arr.push(elem);  
};  

// pop  
let arr2 = [1, 2, 3];  
arr2.pop();  

const removeLast = (arr) => {  
    arr.pop();  
};  

// unshift  
let arr3 = [2, 3, 4];  
arr3.unshift(1);  

const addFirst = (arr, elem) => {  
    arr.unshift(elem);  
};  

// shift  
let arr4 = [1, 2, 3];  
arr4.shift();  

const removeFirst = (arr) => {  
    arr.shift();  
};  

// fill  
let arr5 = new Array(5).fill(0);  

const fillArray = (arr, value, start, end) => {  
    arr.fill(value, start, end);  
};  

// splice  
let arr6 = [1, 2, 3, 4, 5];  
arr6.splice(1, 2);  

const removeElements = (arr, index, count) => {  
    arr.splice(index, count);  
};  

// reverse  
let arr7 = [1, 2, 3];  
arr7.reverse();  

const reverseArray = (arr) => {  
    arr.reverse();  
};  

// concat  
let arr8 = [1, 2];  
let arr9 = [3, 4];  
let combined = arr8.concat(arr9);  

const mergeArrays = (arrA, arrB) => {  
    return arrA.concat(arrB);  
};  

// includes  
let arr10 = [1, 2, 3];  
arr10.includes(2);  

const checkIncludes = (arr, elem) => {  
    return arr.includes(elem);  
};  

// filter  
let arr11 = [1, 2, 3, 4, 5, 6];  
let evenNumbers = arr11.filter(n => n % 2 === 0);  

const filterArray = (arr, condition) => {  
    return arr.filter(condition);  
};  

// map  
let arr12 = [1, 2, 3];  
let squared = arr12.map(n => n ** 2);  

const transformArray = (arr, transformer) => {  
    return arr.map(transformer);  
};  
