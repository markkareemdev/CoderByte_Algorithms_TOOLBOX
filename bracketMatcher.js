




function BracketMatcher(str) { 
  var count = 0;
  for (var i=0; i < str.length ; i++){
    if( str[i] === "(") count++;
    if( str[i] === ")") count--;
  }
   return count == 0 ? 1 : 0

  // code goes here  

}
   
// keep this function call here 
BracketMatcher(readline());