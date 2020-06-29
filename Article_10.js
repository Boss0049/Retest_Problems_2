let listNum = prompt("Input value");
let listNumArray = listNum.split(",");
let confirmSort = confirm("ตกลง:น้อยไปมาก ยกเลิก:มากไปน้อย");
let NewArray = [];
for (let i = 0; i < listNumArray.length; i++) {
  NewArray.push(Number(listNumArray[i]));
}
if (confirmSort == true) {
  alert(NewArray.sort((a, b) => a - b));
} else if (confirmSort == false) {
  alert(NewArray.sort((a, b) => a - b).reverse());
}
