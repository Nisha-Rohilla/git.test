
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

// let originalPrice = parseInt(readLine());
// let discount = parseInt(readLine());

// let discountPrice = originalPrice * discount /100;
// let finalPrice = originalPrice - discountPrice;
// console.log(finalPrice);

// 300
// 30
// expected output :
// 300*30/100 = 90

// final output:
// 300-90=210


let number_of_rows = parseInt(readLine());//3
let number_of_colums = parseInt(readLine());//3
let arr;
for(let i= 1; i <=number_of_rows;i++){
  let row = readLine();
  // console.log(i + "row is "+ row.split(","));
  let sub_arr=[]
  for(let j=0; j<number_of_colums;j++){
    sub_arr[j] = row.split(",")[j];
    console.log(sub_arr[j]);
  }
  arr.push(sub_arr);
}
// console.log(arr);