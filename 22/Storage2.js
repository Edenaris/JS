window.onload = function() {
      function processNumber(input) {
    return new Promise((resolve, reject) => {
      if (typeof input !== "number") {
        reject("Це не число!");
      } else {
        resolve(input);
      }
    })
    .then(num => {
      return num + 3;
    })
    .then(num => {
      return num * 2;
    })
    .then(num => {
      return num - 10;
    })
    .then(result => {
      console.log("Результат:", result);
    })
    .catch(error => {
      console.log("Помилка:", error);
    });
  }
  processNumber("Hello");

  function toUpperAfterDelay(text) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (typeof text !== "string") {
          reject("Це не рядок!");
        } else {
          resolve(text.toUpperCase());
        }
      }, 2000);
    });
  }
  toUpperAfterDelay("helooo1")
    .then(result => {
      console.log("Результат:", result);
    })
    .catch(error => {
      console.log("Помилка:", error);
    });


  function  EqualityNumbers(num1, num2){
    return new Promise((resolve, reject) => {
      if (num1 > num2){
        resolve(num1);
      }else if (num1 < num2){
        resolve(num2);
      }else{
        reject("Числа рівні");
      }
    });
  }
  EqualityNumbers(5, 10)
    .then(result => {
      console.log("Більше число:", result);
    })
    .catch(error => {
      console.log("Помилка:", error);
    });

}