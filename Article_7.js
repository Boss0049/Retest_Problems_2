let allNumber = [];
let total = [];
let cranberry = [];
let turn = 3;
while (true) {
  let num = prompt("Input Number");
  if (num == "stop") {
    break;
  }
  allNumber.push(num);
}
allNumber.sort((a, b) => a - b);
while (turn > 0) {
  for (let i = 2; i <= allNumber[0]; i++) {
    let count = 0;
    for (let j = 0; j < allNumber.length; j++) {
      if (allNumber[j] % i == 0) {
        count++;
        if (count == allNumber.length) {
          allNumber = allNumber.map((item) => item / i);
          cranberry.push(i);
        }
      }
    }
  }
  turn--;
}
console.log(cranberry.reduce((a, b) => a * b));
