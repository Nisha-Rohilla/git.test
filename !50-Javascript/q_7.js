// Find 1st January be a Sunday between a range of years

for(let year = 2000 ; year<2050 ; year++){
    let day = new Date(year, 0 ,1);
    if(day.getDay()===0)
    console.log(`1st January be a Sunday ${year}`);
}