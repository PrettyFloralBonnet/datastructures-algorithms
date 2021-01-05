// factorial of the given number

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

// the number that appears in the fibonacci sequence under the given index

function fibonacciRecursive() {

}

function fibonacciIterative() {

}