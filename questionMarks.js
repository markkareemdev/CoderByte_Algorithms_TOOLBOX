function QuestionsMarks(str) { 

    var result = false;
   
       for ( var i = 0; i < str.length; i++){ 
         // i initiatiated two for loop to do check for the condition. 
           for(var j = i + 1; j < str.length; j++){
               if( (Number(str[i]) + Number(str[j])) === 10){  
                 // this checks for the pair of numbers to be equal to 10
                   result = true;
                   if((str.slice(i,j).split("?").length - 1) < 3){
                      return false
                   } 
                   // this checks for the question marks to
                   // be at least 3, the -1 is to remove the inclusion i in 
                   //the .splice method.
   
               }
           }
       }
   
   
       return result
   }
      
   // keep this function call here 
   console.log(QuestionsMarks(readline()));