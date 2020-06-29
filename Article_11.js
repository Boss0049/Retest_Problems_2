let listNum = prompt("Input value");
let listNumArray = listNum.split(",");
let confirmSort = confirm("ตกลง:น้อยไปมาก ยกเลิก:มากไปน้อย");
let NewArray = [];
for (let i = 0; i < listNumArray.length; i++) {
  NewArray.push(Number(listNumArray[i]));
}
if (confirmSort == true) {
  for (let i = 0; i < NewArray.length; i++) {
    for (let j = 0; j < NewArray.length; j++) {
      if (i != j && NewArray[i] < NewArray[j]) {
        let oldValueI = NewArray[i];
        let oldValueJ = NewArray[j];
        NewArray[i] = oldValueJ;
        NewArray[j] = oldValueI;
        console.log(NewArray);
      }
    }
  }
  alert(NewArray);
} else if (confirmSort == false) {
  for (let i = 0; i < NewArray.length; i++) {
    for (let j = 0; j < NewArray.length; j++) {
      if (i != j && NewArray[i] > NewArray[j]) {
        let oldValueI = NewArray[i];
        let oldValueJ = NewArray[j];
        NewArray[i] = oldValueJ;
        NewArray[j] = oldValueI;
        console.log(NewArray);
      }
    }
  }
  alert(NewArray);
}
