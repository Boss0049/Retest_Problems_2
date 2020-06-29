let sum = 0;
// for (let i = 1; i <= 4129980; i++) {
//   for (let j = 0; j < String(i).length; j++) {
//     sum += Number(String(i).slice(j, 1));
//   }
// }
for (let i = 1; i <= 4129980; i++) {
  sum += Number(String(i).length);
}
console.log(sum);
