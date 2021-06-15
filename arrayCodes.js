


// a fxn that returns only one unique member from the array of values
// using the big o notation...
// the problem here is that the space complexity is high in approach 1
//the time complexity is okay.

//approach one
// function singleArray(arr) {
//     var arrays = [];

//         for (var i = 0; i < arr.length; i++){
//             var ele = arr[i];
//             if(!arrays.includes(ele)){  // the include here is an in-built function that iterates through an array too, this adds to the space complexity.
//                 arrays.push(ele)
//             } 
//         } 
//     return arrays; 
// }
// const doubleArray = ["cat", "mouse", 'monkey', "goat", "cat", "mouse", 'monkey', "goat"];
// singleArray(doubleArray);


// approach 2

unique = arr => {
    uniqueSet = new Set();
    for (var i = 0; i < arr.length; i++){
        var ele = arr[i];
        uniqueSet.add(ele);
    } 
return Array.from(uniqueSet); 
}
const doubleArray = ["cat", "mouse", 'monkey', "goat", "cat", "mouse", 'monkey', "goat"];
unique(doubleArray)