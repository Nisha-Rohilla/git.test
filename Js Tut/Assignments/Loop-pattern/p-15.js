// downwords right triangle

// let n =5;
// for(let row=1; row<=n; row++){
//     for(let col=1; col<=n-row+1; col++){
//         console.log("* ");
//     }
//     console.log("\n");
// }

// let n = 5;
// for (let row = 1; row <= n; row++) {
//     for (let col = 1; col <= row; col++) {

//         console.log("*");
//     }
//     console.log(" ")
// }
// for (let row = 1; row <= n; row++) 
// {
//     for (let col = 1; col <= n - row + 1; col++)
//      {
//         console.log("* ");
//     }
//     console.log(" ");
// }

// let string = " ";

// for(let i =0; i<5; i++){
//     for(let j=0; j<5;j++){
//         string+="*";
//     }
//     string+="\n"
// }
// console.log(string)
// for(let i=1; i<=5; i++){
//     process.stdout.write("******");
//     console.log();


// let string = "";

// for(var i = 65; i <= 69; i++) { 
//   for(let j = 65; j <= i; j++) { 
//     string += String.fromCharCode(`${i}`);
//   }
//   string += "\n";
// }
// console.log(string);
// function foo() {
//   let a = b = 0;
//   a++;
//   // return a;
//   // console.log(typeof a);
// }
// foo();
// console.log("a" , typeof a); // => ???
// console.log("b" , typeof b); // => ???

function arrayFromValue(item) {
  return item;
}
arrayFromValue(10);
const x = arrayFromValue(10);
console.log(x);