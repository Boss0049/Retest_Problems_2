let unPrime = "";
let prime = "";
for (let i = 2; i <= 100; i++) {
  for (let j = 2; j <= 100; j++) {
    if (i % j == 0) {
      if (i != j) {
        unPrime += `${i},`;
        break;
      } else if (i == j) {
        prime += `${i},`;
        break;
      }
    }
  }
}
alert(unPrime);
alert(prime);
