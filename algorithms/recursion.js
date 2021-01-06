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

function fibonacciRecursive(index) {
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
