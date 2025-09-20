function oddEven(number) {
   const remainder = number % 2;
   if(remainder == 0){
    console.log("number is even", number);
   }else {
    console.log("number is odd", number);
   }
}

oddEven(-6);