let setNumber = +prompt("Input Number");
function factorial() {
  let sum = "";
  let answer = 1;
  let total = 0;
  for (let i = 1; i <= setNumber; i++) {
    answer *= i;
  }
  for (let j = 0; j < String(answer).length; j++) {
    sum += `+${String(answer)[j]}`;
    total += Number(String(answer)[j]);
  }
  return `${sum} = ${total}`;
}
alert(factorial(setNumber));
