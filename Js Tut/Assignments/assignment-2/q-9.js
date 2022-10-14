function leapyear(year)
{
    return(year%100===0)?(year%400===0):(year%4===0);
}

console.log(leapyear(4578));
console.log(leapyear(97845));
console.log(leapyear(2001));
console.log(leapyear(4520));
console.log(leapyear(2008));
console.log(leapyear(98547854));
console.log(leapyear(121212));
