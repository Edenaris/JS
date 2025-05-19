
function addit(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) { 
  if (b === 0) {
    throw new Error("Неможливо");
  }
  return a / b;
}
export { addit, subtract, multiply, divide };