let q = 5;
let string = "";

for (let i =0; i<q; i++){
    for(let j =0; j<q; j++){
        string += "*";
    }
    string+= "\n";
}

console.log(string);

for(i=5;i>=1;i--) {
    for(j=i;j>=1;j--){
        console.log(j);
    }
        console.log("\n");
}


n=5;
for(let row=1; row<=n;row++){
    for(let col =1; col<=n; col++){

        console.log(row);
    }
    console.log("\n")
}

// Right Triangle
for(var i=1; i<=4; i++){
    console.log("* ".repeat(i));
 }

// Right Triangle
for (var i = 8; i >= 1; i--) {
    var str = "";
    for (var j = i; j <= 7; j++) {
    str += "*";
       }
   console.log(str);
  }

//  Triangle

// This is the simplest solution which I came across using only one for loop.

var a = '';
var n = 5;
var m = (n-1); 
for(i=1; i <= n; i++)
{
    a = a.trim();
    a = ' '.repeat(m) + a + (i > 1 ? ' ' : '') + '*';
    console.log(a);
    m--;
}

// Using function

function stars(n){
    var str = '';
    for(var i=1; i<=n; i++){
        for(var k=1; k<=n-i; k++){
            str += "\t";
        }
        for(var j=1; j<=i; j++){
            str += "*\t\t";
        }
        console.log(str);
        str = "";
    }
}
stars(7)


// Using function

function pyramid(n) {

    for(i=1 ;i<=n;i++) {

        let str = ' '.repeat(n-i);
        let str2 = '*'.repeat(i*2-1);
    console.log(str + str2 + str);
    }
}

pyramid(5)


// 
for(i=0;i<=5;i++)
{
    for(j=0;j<=i;j++)
    {
        console.log('*');
    }
    console.log('\n')
}

// 

var x, y, space = "",
star = "",
n = 4,
m = n - 1;
for (x = 1; x <= n; x++) {
for (y = m; y >= 1; y--) {
    space = space + (" ");
}
m--;
for (let k = 1; k <= x * 2 - 1; k++) {
    star = star + "*"
}
console.log(space + star)
space = '';
star = "";
}

// downwords triangle

for (var i = 5; i >= 1; i--) {
    var ouput = "";
    for (var j = i; j >= 1; j--) {
        ouput += "*"
    }
    console.log(ouput);
}