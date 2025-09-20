 function calculateArea(length, width){
    if(length <= 0){
        throw new RangeError("length should be positive number");
        
    }
    if(width <= 0){
        throw new RangeError("width should be positive number")
    }
     const calculate = length * width;
     console.log(calculate)
}

calculateArea(-2, 3)