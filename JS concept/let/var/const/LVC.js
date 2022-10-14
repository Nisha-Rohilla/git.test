// Understanding of variables

//  ----------- VAR keyword ------------
// A variable declared with VAR keyword is used in Function Scope

// function VAR(name) {
//     if(name){
//         var f_Name = "Nisha";
//         var L_Name = "Rohilla"
//         // console.log("my name is" + " "+f_Name + " " + L_Name);
//     }
//     console.log("my name is" + " "+f_Name + " " + L_Name);
// }
// VAR(true);

// ------------Let/const Keywords -------------

function mixed(params) {
   if(params){
    let f_Name = "Nisha";
    const L_Name = "Rohilla";
    // console.log("my name is"+" "+ f_Name + " "+ L_Name);
   } 
//    console.log("my name is"+" "+f_Name+" "+L_Name);  -------> let/const not working ouside the block scope
}
mixed(true);


let book = ["1",2,3,4,5,6,7]
book[5]="JS"
console.log(book[5])
console.log(book)
console.log(book.push("NR"))
console.log(book)


