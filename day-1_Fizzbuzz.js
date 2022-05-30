var fizzBuzz = function(n) {
    let a = [];
    for(let i = 1; i <= n; i++){
        if ((i % 5)==0){
            if((i%3)==0){
                a.push("FizzBuzz");
            }
            else{
                a.push("Buzz");
            }
        }
                
        else if((i % 3)==0){
            a.push("Fizz");
            
        }
        else{
            a.push(String(i));
        }
    }
    return a;
    
};

// // print(a)
// console.log(parseInt("123Hello"));

// console.log(parseInt("Hello123"));
// const set = new Set();

// set.add(5);

// set.add('Hello');

// set.add({ name: 'Scaler' });

// for (let item of set) {

// console.log(item + 6);

// }
