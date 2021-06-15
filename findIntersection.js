
function FindIntersection(strArr) { 

  // extracting the string out into different array
  const valid_regex = /[0-9]+/g;
  const sample1 = strArr[0].match(valid_regex);
  const sample2 = strArr[1].match(valid_regex);

  

  // initiating a new output array
  const arr = [];

  for(var i = 0; i < sample1.length; i++){
      for(var j = 0; j < sample2.length; j++){
         var ele = sample2[j];
              if ( sample1[i] === ele){
                arr.push(ele)
              }
          }
  }

  // check if the array is empty(means no intersection between the samples of array) 
  if(arr.length == 0){
    return "false"
  }
  // converting the arr element into int using the map function together with parseInt(x) or +x.
  const semiArray = arr.map(x => +x);
  // putting it the array in the required format without the square bracket and seperated by commas.
  const finalArray = semiArray.join(',');
  return finalArray; 

}
   
// keep this function call here 
console.log(FindIntersection(readline()));






  