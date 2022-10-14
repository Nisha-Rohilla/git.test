// left triangle

// for(let i =1; i<=5; i++){
//     for(let j=1; j<=i; j++){
//         console.log("*")
//     }
//     console.log()
// }

// for (let i = 5; i >= 1; i--) {
//     var str = "";
//     for (var j = i; j <= 5; j++) {
//     str += "* ";
//        }
//    console.log(str);
//   }

// for(var i=1; i<=4; i++){
//     console.log("* ".repeat(i));
//  }

// n=5;
// for(let row=1; row<=n;row++){
//     for(let col =1; col<=row; col++){

//         console.log("* ");
//     }
//     console.log("\n")
// }

let n=5;
for(let row=1; row<=n;row++){
    for(let col =1; col<=row; col++){

        console.log(row);
    }
    console.log("\n")
}
for(let row=1; row<=n; row++){
    for(let col=1; col<=n-row+1; col++){
        console.log("* ");
    }
    console.log("\n");
}

 