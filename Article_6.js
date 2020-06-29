let inputNumber = +prompt("Input Number");
let sum = "";
let answer = 1;
function sumPrime(inputNumber) {
  for (let i = 2; i <= inputNumber; i++) {
    for (let j = 2; j <= inputNumber; j++) {
      if (i % j == 0) {
        if (i != j) {
          sum += `+${i}`;
          answer += i;
          break;
        } else {
          sum += `-${i}`;
          answer -= i;
          break;
        }
      }
    }
  }
  return `1${sum} = ${answer}`;
}
alert(sumPrime(inputNumber));
