let originalPrice = parseInt(readLine());
let discount = parseInt(readLine());

let discountPrice = originalPrice * discount /100;
let finalPrice = originalPrice - discountPrice;
console.log(finalPrice);

// 300
// 30
// expected output :
// 300*30/100 = 90

// final output:
// 300-90=210