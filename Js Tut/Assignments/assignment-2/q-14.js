function p_n(a, b){
    if ((a<0 && b>0) || (a>0 && b<0)) {
        return true;
    }
    else{
        return false;
    }
}

console.log(p_n( 4 , 9));
console.log(p_n(-7 , 5));
console.log(p_n(-6 , -4871845));
console.log(p_n(12 , -2))