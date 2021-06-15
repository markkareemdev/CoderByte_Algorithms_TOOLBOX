
function factorial(num) {
    var total = 1;
    if (num >= 1){
        for (let i = 1; i <= num; i++) {          
          total = total * i
        }
    } else if( num = 0){
         total = total;
    } else total = "Input a valid number"

   return total;   
}

factorial(5)