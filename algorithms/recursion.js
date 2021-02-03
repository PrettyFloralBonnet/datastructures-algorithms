// return factorial of the given number

function findFactorialRecursive(number) {
    if (number <= 2) return number;
    return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
    let answer = 1;
    for (number; number > 0; number--) {
        answer *= number;
    }
    return answer;
}

// return the number that appears in the fibonacci sequence
// (0, 1, 1, 2, 3, 5, 8, 13, 21, 34...) under the given index

function fibonacciRecursive(index) {  // O(2^n)
    if (index < 2) return index;
    return fibonacciRecursive(index - 1) + fibonacciRecursive(index - 2);
}

function fibonacciIterative(index) {
    let firstNumber = 0, secondNumber = 1;

    if (index === 0) {
        return firstNumber;
    } else if (index <= 2) return secondNumber;

    for (let count = 0; count !== index - 1; count++) {
        thirdNumber = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = thirdNumber;
    }
    return thirdNumber;
}

function fibonacciMemoized() {
    let cache = {};
    return function fib(n) {
        if (n in cache) {
            return cache[n];
        } else {
            if (n < 2) {
                return n;
            } else {
                cache[n] = fib(n - 1) + fib(n - 2);
                return cache[n];
            }
        }
    }
}

const fibMem = fibonacciMemoized();

console.log(fibMem(20));
console.log(fibMem(20));


// reverse a string

function reverseString(str) {
    let arr = str.split("");
    let arrReversed = [];
    function addToArray(array) {
        if (array.length > 0) {
            arrReversed.push(array.pop());
            addToArray(array);
        }
        return;
    }
    addToArray(arr);
    return arrReversed.join("");
}

function reverseStringRecursive(str) {
    if (str === "") return "";
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
}
