# The Big O

**The Big O** is used to measure *scalability*, or how quickly function runtime grows as the number of function arguments increases.  
  
O : the number of operations  
n : the size of the input  

## O(n)

The **O(n)** represents *linear* time -- the runtime increase is directly proportionate to the number of inputs.  

For example:  
  
```python
def list_all_boxes(boxes):
    for box in boxes:
        print(box)
```

```javascript
// ES5
function listAllBoxes(boxes) {
    boxes.forEach(function(box) {
        console.log(box);
    });
}

// ES6
const listAllBoxes = boxes => {
    boxes.forEach(box => console.log(box));
}
```

## O(1)

The **O(1)** represents *constant* time -- the runtime never changes.  
  
Examples:  
  
```python
def list_first_box(boxes):
    print(boxes[0])
```

```javascript
function listFirstBox(boxes) {
    console.log(boxes[0]);
}
```

The actual number of operations is irrelevant (it can be O(3) etc.) - what matters is that it's constant.

## O(n^2)

The **O(n^2)** represents *quadratic* time -- every time the number of elements increases, the number of operations increases quadratically:

```python
BOXES = [1, 2, 3, 4, 5]

def print_all_pairs_in_list(li):
    for i in range(0, len(li)):
        for j in range(0, len(li)):
            print(li[i], li[j])

if __name__ == '__main__':
    print_all_pairs_in_list(BOXES)
```

```javascript
const boxes = [1, 2, 3, 4, 5];

function logAllPairsOfArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(array[i], array[j]);
        }
    }
}

logAllPairsOfArray(boxes)
```

## O(n!)

The **O(n!)** represents *factorial* time -- we are adding a nested loop for every input. This is **the worst** possible Big O notation, and if your function has it, you are almost certainly doing something wrong.


## About SCALABILITY

There's actually more to scalability than just **speed**. Another concern is also **memory**.  
  
Good code is:
* readable
* light on memory use (has efficient **space complexity**)
* fast (has efficient **time complexity**)
  
When a program is executed, it has two ways to "remember" things: **the heap** and **the stack**. Usually we keep our variables in the heap and keep track of our function calls in the stack.

This function has a time complexity of O(n), but a space complexity of O(1):

```javascript
function booooo(n) {
    for (let i = 0; i < n.length; i++) {
        console.log('booooo!');
    }
}

booooo([1, 2, 3, 4, 5]);
```

Whereas this function has a space complexity of O(n), because each element of the array takes up memory to have its value allocated:

```javascript
function arrayOfManyGreetings(n) {
    let hiArray = [];
    for (let i = 0; i < n; i++) {
        hiArray[i] = 'hi';
    }
    return hiArray;
}

arrayOfManyGreetings(6);
```

The bottom line is, sometimes there's a tradeoff between saving time and saving space.

## The Big O Rule Book

### RULE 1: Worst Case

The Big O only cares about the worst case scenario. If we have a function which iterates through an array, it doesn't matter that this function might be O(1) in a situation where an item we're looking for is at the beginning of the array. It might be at the end, so this function is O(n).

### RULE 2: Drop the Constants

The Big O doesn't care about constant operations. On a graph, we don't care how steep the line is, only how the line moves.

### RULE 3: Different Terms for Inputs

Different inputs should have different variables. This is no longer O(n):

```javascript
function logBoxesTwice(boxes, boxes2) {
    boxes.forEach(function(box) {
        console.log(box);
    });

    boxes2.forEach(function(box) {
        console.log(box);
    });
}
```

The first for loop is going to depend on how big the first argument is, and the second one -- on how big the second argument is. So the Big O of the function above is actually something like O(n + m). These are the different variables -- because we don't know the length, we differentiate between the inputs (n and m in this example). Again: separate collections should have separate variables.

### RULE 4: Drop Non Dominant Terms

```python
def print_all_numbers_then_all_pair_sums(numbers):
    print('These are the numbers: ')
    for number in numbers:
        print(number)

    print('And these are their sums: ')
    for number in numbers:
        for number2 in numbers:
            print(number + number2)


if __name__ == '__main__':
    print_all_numbers_then_all_pair_sums([1, 2, 3, 4, 5])
```

```javascript
function logAllNumbersThenAllPairSums(numbers) {
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

logAllNumbersThenAllPairSums([1, 2, 3, 4, 5]);
```

We only care about the most important (dominant) term. In other words, we're only worried about scale. In the example above, the O(n^2) is more important than O(n), so the Big O of the entire function is O(n^2).
