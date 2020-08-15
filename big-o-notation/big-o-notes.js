
    // The Big O

/*
THE BIG O is used to measure SCALABILITY,
or how quickly function runtime grows as the number of function arguments increases.

O -- number of operations
n -- the size of the input
*/

    // O(n)

/*
O(n) represents LINEAR time --
the runtime increase is directly proportionate to the number of inputs.

Examples:
*/

// ES5
function compressAllBoxes(boxes) {
    boxes.forEach(function(item) {
        console.log(item);
    });
}

// ES6
const compressAllBoxes = boxes => {
    boxes.forEach(box => console.log(box));
}

    // O(1)

/*
O(1) represents CONSTANT time --
the runtime never changes.

Example:
*/

function compressFirstBox(boxes) {
    console.log(boxes[0]);
}

// The actual number of operations is irrelevant (it can be O(3) etc.)

    // O(n^2)

/*
O(n^2) represents QUADRATIC time --
every time the number of elements increases, the number of operations increases quadratically.

Example:
*/

// Log all pairs of array

const boxes = [1, 2, 3, 4, 5];

function logAllPairsOfArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(array[i], array[j]);
        }
    }
}

logAllPairsOfArray(boxes)

    // O(n!)

/*
O(n!) represents FACTORIAL time --
we are adding a nested loop for every input.

This is THE WORST Big O notation and if your function has it,
you are doing something wrong.
*/


// About SCALABILITY

/*
There's actually more to SCALABILITY than just SPEED.
Another concern is also MEMORY.

Good code is:
 - Readable,
 - Light on memory use (its SPACE COMPLEXITY is efficient),
 - Fast (its TIME COMPLEXITY is efficient).

 When a program executes, it has two ways to remember things: THE HEAP and THE STACK.

 Usually we keep our VARIABLES in the heap and keep track of our FUNCTION CALLS in the stack.
*/

function booooo(n) {
    for (let i = 0; i < n.length; i++) {
        console.log('booooo!');
    }
}

booooo([1, 2, 3, 4, 5]);

/*
The function above has a time complexity of O(n),
but a space complexity of O(1).
*/

function arrayOfManyGreetings(n) {
    let hiArray = [];
    for (let i = 0; i < n; i++) {
        hiArray[i] = 'hi';
    }
    return hiArray;
}

arrayOfManyGreetings(6);

/*
Whereas the function above has a space complexity of O(n),
because each element of the array takes up memory to have its value allocated.

Bottom line: sometimes there's a tradeoff between saving TIME and saving SPACE.
*/

    // The Big O Rule Book

// RULE 1: Worst Case

/*
Big O only cares about the worst case scenario.
If we have a function which iterates through an array,
it doesn't matter that this function might be O(1) in a situation where
an item we're looking for is at the beginning of the array.
It might be at the end, so this function is O(n).
*/

// RULE 2: Drop the Constants

/*
Big O doesn't care about constant operations.
On a graph, we don't care how steep the line is,
only how the line moves.
*/

// RULE 3: Different Terms for Inputs

/*
Different inputs should have different variables.

This is no longer O(n):
*/

function compressBoxesTwice(boxes, boxes2) {
    boxes.forEach(function(boxes) {
        console.log(boxes);
    });

    boxes2.forEach(function(boxes) {
        console.log(boxes);
    });
}

/*
The first for loop is going to depend on how big the first argument is,
and the second one -- on how big the second argument is.

So the Big O of the function above is actually something like O(n + m).

These are the different variables -- because we don't know the length,
we differentiate between the inputs (n and m in this example).

Again -- separate collections should have separate variables.
*/

// RULE 4: Drop Non Dominant Terms

function printAllNumbersThenAllPairSums(numbers) {
    console.log('These are the numbers: ');
    numbers.forEach(function(number) {
        console.log(number);
    });

    console.log('And these are their sums: ');
    numbers.forEach(function(firstNumber) {
        numbers.forEach(function(secondNumber) {
            console.log(firstNumber + secondNumber);
        });
    });
}

printAllNumbersThenAllPairSums([1, 2, 3, 4, 5]);

/*
We only care about the most important (dominant) term.
In other words, we're only worried about SCALE.

In the example above, the O(n^2) is more important than O(n),
so the Big O of the entire function is O(n^2).
*/
