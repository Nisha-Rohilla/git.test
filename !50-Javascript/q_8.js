// Get a random integer from 1 to 10 inclusive
// const num = Math.ceil(Math.random() * 10);
// console.log(num);
//  const gnum = prompt('Guess the number between 1 and 10 inclusive');
//  if (gnum == num)
//    console.log('Matched');
//   else
  //  console.log('Not matched, the number was '+gnum);
  var reverse = function(x) {
    let str = x.toString().split(" ").reverse().join("");
     if(str.endsWith("-")){
         str = "-" + str;
         return parseInt(str);
     }
     else{
         
         return parseInt(str);
     }
     
 };
 let p = reverse(123);
 console.log(p)