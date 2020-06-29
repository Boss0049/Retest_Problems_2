let setNum = +prompt("Input Number");
function numberSequence(setNum) {
  let sum = 0;
  let answer = "";
  for (let i = 1; i <= setNum; i++) {
    for (let j = 1; j <= i; j++) {
      answer += `${i}+`;
      sum += i;
    }
  }
  return `${answer} = ${sum}`;
}
alert(numberSequence(setNum));
