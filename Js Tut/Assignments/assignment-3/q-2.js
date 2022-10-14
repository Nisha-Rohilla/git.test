// for (var i = 1; i < 6; ++i) {
//     for(var j = 0; j < 3; ++j) {
//         console.log(i);
//     }
// }

for (i = 1; i <= 5; i++) {
    for (lc = 0; lc < 3; lc++) {
       console.log(i);
   }
 }

 for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
      console.log(i + " " + j);
    }
  }

//  Finding squares of numbers from 1-10
// sum of numbers from 1 to 10
// Even numbers from m to n
// prime numbers from 0 to n

let arr = [[1, "one", 2, "two"], [3, "three", 4, "four"]];
for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}



// defining a variable
var i = 0;
for (; ; ) {
  console.log(i);
  if(i == 5) { // condition
    break;
  }
  // update the variable
  i++;
}



for (var i = 0; i < 5; i++)
  console.log(i);
