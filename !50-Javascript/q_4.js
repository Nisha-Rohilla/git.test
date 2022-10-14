// Find the area of a triangle where lengths of the three of its sides are 5, 6, 7

// Area of Triangle= √s(s−a)(s−b)(s−c)

let s1 = 5;
let s2 = 6;
let s3 = 7;
let side = (s1+s2+s3)/2;
let area = Math.sqrt(side*((side-s1)*(side-s2)*(side-s3)));
console.log(area);