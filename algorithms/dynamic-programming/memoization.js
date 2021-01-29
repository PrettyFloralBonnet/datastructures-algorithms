function arbitrary(n) {
    // assume this takes a long time
    return n * 2;
}

let cache = {}
function memoizedArbitrary(n) {
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