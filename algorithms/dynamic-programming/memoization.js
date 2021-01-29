function arbitrary(n) {
    // assume this takes a long time
    return n * 2;
}

function memoizedArbitrary() {
    let cache = {};
    return function(n) {
        if (n in cache) {
            console.log('Fetching from cache...');
            return cache[n];
        } else {
            // again, we are assuming this takes a long time
            console.log('Actually calculating...');
            cache[n] = n * 2;
            return cache[n];
        }
    }
}

const memoized = memoizedArbitrary()

console.log(memoized(50));
console.log(memoized(50));
