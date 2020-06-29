let setNumber = +prompt("Input Number");
function factorial() {
  let sum = "";
  let answer = 1;
  for (let i = 1; i <= setNumber; i++) {
    answer *= i;
    sum += `${i}*`;
  }
  return `${sum} = ${answer}`;
}
alert(factorial(setNumber));
