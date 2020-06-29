let sum = [];
let total = 0;
for (let i = 3; i <= 1000; i++) {
  if (i % 3 == 0 || i % 5 == 0) {
    sum.push(i);
    total += i;
  }
}
alert(`${sum.join("|")} = ${total}`);
