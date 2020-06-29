function primeNumber(numberInput) {
  let sum = [];
  let sum1 = [];
  for (let i = 2; i <= numberInput; i++) {
    for (let j = 2; j <= numberInput; j++) {
      if (i % j == 0) {
        if (i != j) {
          sum.push(i);
          break;
        } else {
          sum1.push(i);
        }
      }
    }
  }
  return sum1;
}
let numberInput = +prompt("Input Number");
alert(primeNumber(numberInput));
