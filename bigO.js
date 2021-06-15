// The slow solution.
const slowUnique = (arr) => {
    var array = [];
    for(var i= 0; i < arr.length ; i++){
        var ele = arr[i];
        if(!array.includes(ele)){
            array.push(ele)
        }
    }
    return array;
};



// the fast solution.
 const fastUnique = (arr) => {
    var uniqueSet = new Set();

    for(var k = 0; k < arr.length ; k++){
        var ele = arr[k];
        uniqueSet.add(ele);
    }

    return Array.from(uniqueSet);
};

// random array generator
const randomArray = (num) => {
        genArray = [];
        for ( var j = 0; j < num ; j++){
          const randomNum = Math.floor(Math.random() * num );
          genArray.push(randomNum);
        }

        return genArray;
    }

const testArray = randomArray(100);

// Time and space complexity measure

const startSlow = new Date();
console.log(slowUnique(testArray));
const endSlow = new Date();
console.log(`slow n^2 finished in ${endSlow - startSlow} ms.`)

const startFast = new Date();
console.log(fastUnique(testArray));
const endFast = new Date();
console.log(`slow n finished in ${endFast - startFast} ms.`)



