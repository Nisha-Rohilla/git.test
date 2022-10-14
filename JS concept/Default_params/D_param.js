// 1
function summ(a,b){
    console.log(a+b)
}
summ();

// 2
// Set default values to parameter
function add(a=10,b=10){
    console.log(a+b)
}
add()
add(6);
add(undefined,2)
add(undefined,undefined)

// 3
// Changed  Default values during function call
function gossip(task = "swim in winter", duration = 1){
    console.log(`I'll give my task to Ganesh that is ${task} for ${duration} hour`);
}
gossip()
gossip("made food")
gossip(undefined , 5)

// 4
// If no default value assigned for a parameter
function fun(f_name="Nisha",L_Name){
    console.log(`Hey ${f_name}  ${L_Name},how are you`);
}
fun();
fun(undefined,"Rohilla")
