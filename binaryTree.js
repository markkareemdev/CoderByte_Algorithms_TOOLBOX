// //instantiating a node class
// class Node{
//     constructor(val){
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }

// // creating the instances of the node 
// const a = new  Node('a');
// const b = new  Node('b');
// const c = new  Node('c');
// const d = new  Node('d');
// const e = new  Node('e');
// const f = new  Node('f');



// //forming the node tree

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// // getting the stacks out from the queue using first in first out approach.

// const breadthFirstPrint = (root) => {
//     const queue = [root];
    

//     while( queue.length > 0){
//         var curr = queue.shift();
//         console.log(curr.val);
//         if(curr.left !== null){
//             queue.push(curr.left)
//         }
//         if(curr.right !== null){
//             queue.push(curr.right)
//         }
//     }
 
// }

// breadthFirstPrint(a);


// Excercise 2.
// creating a binary tree and adding its sum

// initiating a Node class.
class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// instatiating different nodes
const a = new Node(10);
const b = new Node(9);
const c = new Node(8);
const d = new Node(7);
const e = new Node(6);
const f = new Node(5);
const g = new Node(4);

// creating a node tree
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right =g;

const breadthFirstPrint = (root) => {
    var quote = [root];
    var sum = 0;

    while( quote.length > 0){
        var curr = quote.shift();
        // console.log(curr.val)
        sum += curr.val;
        if(curr.left !== null){
            quote.push(curr.left);
        }
        if(curr.right !== null){
            quote.push(curr.right);
        }
    }

    return sum;
}


breadthFirstPrint(a);



