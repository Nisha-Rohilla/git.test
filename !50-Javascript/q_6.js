// Check whether a given year is a leap year in the Gregorian calendar

function year(y){
    return y % 100 === 0 ? y % 400 === 0 : y % 4 === 0;
}
console.log(year(1998));
console.log(year(1999));
console.log(year(2000));
console.log(year(2001));
console.log(year(2002));
console.log(year(2003));
console.log(year(2004));