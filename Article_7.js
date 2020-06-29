let allNumber = [];
while (true) {
  let num = prompt("Input Number");
  if (num == "stop") {
    break;
  }
  allNumber.push(+num);
}
function ครน(allNumber) {
  let result1 = 0,
    result2 = 0;
  let l = allNumber.length;
  for (i = 0; i < l; i++) {
    result1 = allNumber[i] % allNumber[i + 1];
    if (result1 === 0) {
      allNumber[i + 1] = (allNumber[i] * allNumber[i + 1]) / allNumber[i + 1];
    } else {
      result2 = allNumber[i + 1] % result1;
      if (result2 === 0) {
        allNumber[i + 1] = (allNumber[i] * allNumber[i + 1]) / result1;
      } else {
        allNumber[i + 1] = (allNumber[i] * allNumber[i + 1]) / result2;
      }
    }
  }
  return allNumber[l - 1];
}

console.log(ครน(allNumber));
// console.log(lcm_more_than_two_numbers([5, 10, 15, 25]));
