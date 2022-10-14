// //  We need to be wrap Variable and Parameter in Dollar sign and curly braces ${}

// // #1
// // before 
// function Hello(name){
//     console.log("Namste" +" "+ name +"!");
// }
// Hello("Nisha")
// // after
// function Hey(name) {
//     console.log(`Namste ${name}!`);
// }
// Hey("Nishu")

// // 2
// // Before 
// console.log("My name is \n"+"Nisha Rohilla");
// // After
// console.log(`My name is
// Nisha rohilla`);

// // 3
// // Before
// var f_Name = "Hello";
// var L_Name = "World";
// console.log("Hey my first programme is \n " + (f_Name+" "+L_Name));
// // after
// console.log(`Hey my first program is ${f_Name} ${L_Name}`);

// // 4
// // Before 
// let obj ={
//     name:"Nisha Rohilla"
// };
// console.log((obj.name.toUpperCase()) +" "+ 'You have been selected for the frontend web developer job role');
// // after
// let objj ={
//     name:"Nisha Rohilla"
// };
// console.log(`${objj.name.toUpperCase()} you have been selected for the frontend web developer job role`)


//  -------------Complex way of using Template --------------
function CTC(name,Expected) {
    var variable = 500000;
    console.log(`Greetings ${name.toUpperCase()} you have been selected for fronted web developere role!
    Salary : ${Expected}
    Variable: ${variable}
    --------------
    Grand total: ${Expected+variable}
    `
    );
}
CTC("Nisha Rohilla",1000000);