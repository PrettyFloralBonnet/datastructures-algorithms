// create a function that accepts a string as a single argument
// and which returns that string in reverse

// ES5
function reverse(str) {
    if (!str || typeof str !== 'string') {
        console.log(`Invalid parameter. Expected string, received ${typeof str}`)
        return
    } else if (str.length < 2) {
        console.log("Received input with one element. No action needed.")
        return str
    } else {
        return str.split('').reverse().join('');
    }
}

// ES6
const reverse3 = str => str.split('').reverse().join('');
