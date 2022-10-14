// console.log("hello");

// // let a=new Array(3);
// // console.log(a);

// // let a1= new Array(1,2,3,4,5,5);
// // console.log(a1);

// let normal = [1,2,3,"1","a",true];
// let normal2 =[1,2,3,"1","a",true];
// // console.log(normal);
// // normal[4]="hello";
// console.log(normal);
// normal.push(normal2)
// console.log(normal);


// WAP to double the array elements

// let a = [1,2,3,4,5]
// let arr1 = []
// for(let i=0; i<a.length; i++){
//     arr1.push(a[i]*2)
// }
// console.log(arr1);

// WAP to reverse the array

let arr=[1,2,3,4,5,]
let s=0;
let e=arr.length-1;

while(s<=e){
     let temp = arr[s]; //arr[0] --> temp --> 1
     arr[s]=arr[e];     // arr[s]--> arr[4]-->5
     arr[e]=temp;       //arr[e] --> 1
     s=s+1;            // 0=0+1=>1
     e=e-1             
     console.log(arr);
}
// console.log(a1);