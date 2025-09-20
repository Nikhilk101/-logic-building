// function smallestNumber(a,b,c){
//     if(a<b && a<c)
//         return a;
//     else if(b<a && b<c)
//         return b;
//     else if(c<a && c<b)
//         return c;

//     return a;
// }

//console.log(smallestNumber(9,3,3));

function smallestNumber2(a,b,c){
    let smallestNumber2 = a;
    if(b < smallestNumber2)
        smallestNumber2 = b;
    if(c < smallestNumber2)
        smallestNumber2 = c

    return smallestNumber2;
}

console.log(smallestNumber2(4,3,6));