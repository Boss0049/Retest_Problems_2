let InputNumber = +prompt("Input Number");
let count = 0;
let sum = [];
function PrimeNumber(InputNumber) {
  for (let i = 2; i < InputNumber ** 2; i++) {
    for (let j = 2; j < InputNumber ** 2; j++) {
      if (i % j == 0) {
        if (i != j) {
          break;
        } else {
          sum.push(i);
          count++;
          break;
        }
      }
    }
    if (InputNumber == count) {
      return sum;
    }
  }
}
alert(PrimeNumber(InputNumber));
