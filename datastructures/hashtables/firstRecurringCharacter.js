// Write a function that accepts an array of characters
// and returns the first recurring character

// e.g.:
// [2,5,1,2,3,4,1,2,4] should return 2
// [2,1,1,2,3,5,1,2,4] should return 1
// [2,3,4,5] should return undefined
// -->

// O(n^2), not great
function firstRecurring(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                return array[i];
            }
            return undefined;
        }
    }
}


// O(n), better, with slightly increased space complexity
// due to the extra variable (map object)
// also, if we have more than one recurring character,
// the result is now different
function improvedFirstRecurring(array) {
    let map = {};
    for (let i = 0; i < array.length; i++) {
        if (map[array[i]] !== undefined) {
            return array[i];
        } else {
            map[array[i]] = i;
        }
    }
    return undefined;
}
