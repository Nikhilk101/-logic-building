function reverseAString(inputString){
    if(typeof inputString !== 'string')
        throw new Error("only strings are alowed");
     
    let result = "";
    for(let i = inputString.length - 1; i >= 0; i--){
        result = result + inputString[i];

    }
    return result;
}

console.log(reverseAString("Nikhil"))