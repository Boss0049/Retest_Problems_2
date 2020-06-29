let setNumber = prompt("Input Number");
let newNumber = setNumber.split(",");
let sum = "";
let total = 0;
for (let i = 0; i < newNumber.length; i++) {
  for (let j = 0; j < newNumber[i].length; j++) {
    sum += `+${newNumber[i][j]}`;
    total += Number(newNumber[i][j]);
  }
}
alert(`${sum} = ${total}`);
